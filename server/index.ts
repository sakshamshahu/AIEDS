// const express = require('express')
// Import Prisma client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;

app.get("/", async (req: Request, res: Response) => {
  res.send("AIDES Backend!!! \n designed by HSM \n © 2024 AIDES. All rights reserved.")
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/adduser", async (req: Request, res: Response) => {
  try {
    const { name, img, userid, email } = req.body;

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        img,
        userid,
        email
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});