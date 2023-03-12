import "reflect-metadata";
import { AppDataSource } from "./data-source";
import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 8080;

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/categories", async (req: Request, res: Response) => {
  const category = await AppDataSource.manager.find(Category);
  res.send(category);
});

app.get("/api/jobs", async (req: Request, res: Response) => {
  const job = await AppDataSource.manager.find(Job);
  res.send(job);
});

app.get("/api/job/:id", async (req: Request, res: Response) => {
  const job = await AppDataSource.manager
    .createQueryBuilder(Job, "job")
    .leftJoinAndSelect("job.category", "category")
    .where("job.id = :id", { id: req.params.id })
    .getOne();
  res.send(job);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
