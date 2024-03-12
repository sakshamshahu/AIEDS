// const express = require('express')
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;

// make the user friend's section here now and connect it over the db (plan the entire schema for the user 1v1 chat)
app.get("/", async (req: Request, res: Response) => {
  res.send("AIDES Backend!!! \n designed by HSM \n © 2024 AIDES. All rights reserved.")
})
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// 790