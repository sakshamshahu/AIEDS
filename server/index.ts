// const express = require('express')
// Import Prisma client
import { Prisma, PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
// const multer = require("multer")
// const path = require("path");
import { exec } from 'child_process';
const fs = require('fs');

const prisma = new PrismaClient();

// storing files locally
const storage = multer.diskStorage({
  destination: "../AI/files",
  filename: function (req: any, file: { fieldname: string; originalname: any; }, cb: (arg0: null, arg1: string) => void) {
    const customFileName = file.originalname
    cb(
      null,
      customFileName
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
    const { username, imageUrl, userId } = req.body;

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


app.post('/playgroundInAction', async (req: Request, res: Response) => {
  try {
    const { query, filename } = req.body;
    
    // TODO: here the logic to connnect with chroma will come 
    // ...
    
    res.status(200).json({
      success: true,
      query,
      filename
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      error: 'Internal server error'
    })
  }
})


app.post("/fetch_files", async (req: Request, res: Response) => {  
  try {
    const user_id = req.body;
    const files = await prisma.file.findMany({
      where: {
        user_id: user_id
      }
    });
    res.status(200).json({
      files: files
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
});


// upload file route
app.post('/uploadFile', upload.array('files', 10), async (req, res) => {
  try {
    const filesArray: any = req.files;
    console.log(filesArray)
    // Save the file
    // const { lastModified, userId } = req.body;
    // for (var i = 0; i < filesArray.length; i++)
    //   var file_name = filesArray[i].originalname;
    // var size = filesArray[i].size;
    // const uploadedFile = await prisma.file.create({
    //   data: {
    //     time_uploaded,
    //     file_name,
    //     size,
    //     user_id,
    //   }
    // });

    const pdfFiles: string[] = filesArray?.map((file: { filename: any; }) => file.filename);

    if (!pdfFiles || pdfFiles.length === 0) {
      return res.status(400).send('No PDF files were uploaded.');
    }

    // removing the previous content
    fs.writeFile("../AI/output/content.txt", '', (err: any) => {
      if (err) {
        console.error('Error clearing file:', err);
        return res.status(500).send('Error clearing file.');
      }
      console.log('Content of the file has been cleared.');

        // change the command to poetry run pdf for your machine
        const command = `cd ../AI && poetry install && poetry shell && poetry run pdf`; ``
        console.log('Command:', command);

        // command to execute python script
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error processing PDF file`, error.message);
            return res.status(500).send("Error processing PDF files");
          }
          
          // reading and getting the data on the textbox
          fs.readFile("../AI/output/content.txt", 'UTF-8', (err:any, data:any) => {
            if (err) {
              console.error('Error reading file:', err);
              return res.status(500).send('Error reading file.');
            }
            // Return the content
            res.status(200).send(data);
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