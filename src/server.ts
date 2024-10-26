import express from "express";
import { Request, Response } from "express";

const app = express();

app.use((req: Request, res: Response) => {
  res.end("Hello world 2!");
});

app.listen(3200, () => {
  console.log("Server is running on port 3200.");
});
