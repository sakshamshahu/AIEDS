// const express = require('express')
// Import Prisma client
import { Prisma, PrismaClient } from '@prisma/client';
const multer = require("multer")
const path = require("path");
import { exec } from 'child_process';
const fs = require('fs');

const prisma = new PrismaClient();

// storing files locally
const storage = multer.diskStorage({
  destination: "./docs/",
  filename: function (req: any, file: { fieldname: string; originalname: any; }, cb: (arg0: null, arg1: string) => void) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });


import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;

app.get("/", async (_req: Request, res: Response) => {
  res.send("AIDES Backend!!! \n designed by HSM \n © 2024 AIDES. All rights reserved.")
});

app.get("/users", async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/adduser", async (req: Request, res: Response) => {
  try {
    const { name, img, userid, email, joined } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        userid: userid,
      },
    });

    if (existingUser) {
      console.log(existingUser);  
      res.json(existingUser);
    } else {
      const newUser = await prisma.user.create({
        data: {
          name,
          img,
          userid,
          email,
          joined
        },
      });
      res.json(newUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post("/changeUser", async (req: Request, res: Response) => {
  try {
    const { username, imageUrl, userId} = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        userid: userId,
      },
      data: {
        name: username,
        img: imageUrl,
      },
    });
    res.json(updatedUser);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post("/save_session", async (req: Request, res: Response) => {  
  // save session can be used in 2 ways: with and without session_id. 
  // With a session ID, it updates a given record
  // without a session ID, it creates a new record. 
  try {
    const { session_id, userid, time_started, title, conversation, deleted } = req.body;
    let existingSession = null;
    if (session_id) {
      existingSession = await prisma.chat_session.findUnique({
        where: {
          session_id: session_id,
        },
      });
    }
    let updatedSession = null;
    if (!existingSession) {
      updatedSession = await prisma.chat_session.create({
        data: {
          userid,
          time_started,
          title, 
          conversation,
          deleted
        }
      });
    }
    else {
      updatedSession = await prisma.chat_session.update({
        where: {
          session_id: session_id
        },
        data: {
          session_id,
          userid,
          time_started,
          title, 
          conversation,
          deleted
        }
      });
    }

    res.status(200).json(updatedSession);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
});


app.post("/fetch_sessions", async (req: Request, res: Response) => {
  const { user_id } = req.body;
  try {
    const sessions = await prisma.chat_session.findMany({
      where: {
        userid: user_id
      }
    });

    res.status(200).json({
      sessions: sessions
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
});


// ########################## DEV STUFF DELETE BEFORE PUSH
app.post("/insert_nonse", async (req: Request, res: Response) => {

  try {
      // Insert rows into the chat_session table
      await prisma.chat_session.createMany({
          data: [
              {
                  userid: 'userid_value_1',
                  title: 'title_value_1',
                  conversation: ["sid is a noob",
                  "sid is a noob", "sid is a noob", "sid is a noob", "sid is a noob",],
                  deleted: true
              },
              {
                  userid: 'userid_value_2',
                  title: 'title_value_2',
                  conversation: ["sid is a noob",
                  "sid is a noob", "sid is a noob", "sid is a noob", "sid is a noob",],
                  deleted: false
              }
          ]
      });
      console.log('Rows inserted successfully');
      res.status(200).json({
        success: true
      })
  } catch (error) {
      console.error('Error inserting rows:', error);
      res.status(500).json({ 
        sucess: false,
        error: 'Internal server error'
      })
  }
})



// upload file route
app.post('/uploadFile', upload.array('files', 10), (req, res) => {
  try {
    const filesArray: any = req.files;
    const pdfFiles: string[] = filesArray?.map((file: { filename: any; })=> file.filename);

    const { userId, lastModified } = req.body;

    console.log("user id - >> " ,userId);
    console.log("time uploaded - >> ", lastModified);
    
    if (!pdfFiles || pdfFiles.length === 0) {
      return res.status(400).send('No PDF files were uploaded.');
    }
    
    // removing the previous content
    fs.writeFile("./docs/content.txt", '', (err:any) => {
      if (err) {
        console.error('Error clearing file:', err);
        return res.status(500).send('Error clearing file.');
      }
      console.log('Content of the file has been cleared.');
      
      // calling the python file here
      const fileCount = pdfFiles.length;
      let completedCount = 0;
      
      pdfFiles.forEach((filename, index) => {
        console.log("i am here");
        const command = `python ./../AI/tests/pdf_reader.py ./docs/${filename} ./docs/content.txt`;
        console.log('Command:', command);

        exec(command, (error, stdout, stderr) => {
          completedCount++;
          if (error) {
            console.error(`Error processing PDF file ${index + 1}:`, error.message);
          }
          if (stderr) {
            console.error(`stderr for PDF file ${index + 1}:`, stderr);
          }
          console.log(`stdout for PDF file ${index + 1}:`, stdout);

          try {
            fs.unlinkSync(`./docs/${filename}`);
            console.log(`File ${filename} deleted.`);
          } catch (err) {
            console.error(`Error deleting file ${filename}:`, err);
          }

          // If all files are processed, read and send data
          if (completedCount === fileCount) {
            fs.readFile("./docs/content.txt", 'UTF-8', (err: any, data: any) => {
              if (err) {
                console.error('Error reading file:', err);
                return res.status(500).send('Error reading file.');
              }
              // Return the content
              res.status(200).send(data);
            });
          }
        });
      });
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file.");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});