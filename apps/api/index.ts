import "reflect-metadata";
import { SQLDataSource } from "./data-source";

import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";

import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 8080;

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/categories", async (req: Request, res: Response) => {
  const categories = await SQLDataSource.manager.find(Category);
  res.send(categories);
});

app.get("/api/companies", async (req: Request, res: Response) => {
  const companies = await SQLDataSource.manager.find(Company);
  res.send(companies);
});

app.get("/api/jobs", async (req: Request, res: Response) => {
  const jobs = await SQLDataSource.manager
    .createQueryBuilder(Job, "job")
    .limit(10)
    .innerJoinAndSelect("job.category", "category")
    .innerJoinAndSelect("job.company", "company")
    .select(["job", "category", "company.id", "company.company_name"])
    .getMany();
  res.send(jobs);
});

app.get("/api/job/:id", async (req: Request, res: Response) => {
  const job = await SQLDataSource.manager
    .createQueryBuilder(Job, "job")
    .leftJoinAndSelect("job.category", "category")
    .where("job.id = :id", { id: req.params.id })
    .getOne();
  res.send(job);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
