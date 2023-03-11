import "reflect-metadata";
import { AppDataSource } from "./data-source";
import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/categories", async (req: Request, res: Response) => {
  const category = await AppDataSource.manager.find(Category);
  res.send(category);
});

app.get("/api/jobs", async (req: Request, res: Response) => {
  const category = await AppDataSource.manager.find(Job);
  res.send(category);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
