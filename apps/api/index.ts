import "reflect-metadata";
import { SQLDataSource } from "./data-source";
import { MongoClient } from "mongodb";
import { env } from "./environment-var";

const uri = env.MONGODB_URL || "mongodb://127.0.0.1:27017";
const dbName = env.MONGODB_DATABASE;

import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";

import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
const port = 8080;

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/sql/categories", async (req: Request, res: Response) => {
  const categories = await SQLDataSource.manager.find(Category);
  res.send(categories);
});

app.get("/api/sql/companies", async (req: Request, res: Response) => {
  const companies = await SQLDataSource.manager.find(Company);
  res.send(companies);
});

app.get("/api/sql/jobs", async (req: Request, res: Response) => {
  const jobs = await SQLDataSource.manager
    .createQueryBuilder(Job, "job")
    .limit(10)
    .innerJoinAndSelect("job.category", "category")
    .innerJoinAndSelect("job.company", "company")
    .select(["job", "category", "company.id", "company.company_name"])
    .getMany();
  res.send(jobs);
});

app.get("/api/sql/job/:id", async (req: Request, res: Response) => {
  const job = await SQLDataSource.manager
    .createQueryBuilder(Job, "job")
    .leftJoinAndSelect("job.category", "category")
    .where("job.id = :id", { id: req.params.id })
    .getOne();
  res.send(job);
});

app.get("/api/nosql/jobs", async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("Job").find({}).toArray();
  await client.close();
  res.status(200).send(collection);
});

app.post("/api/nosql/jobs", async (req: Request, res: Response) => {
  const body = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db(dbName).collection("Job").insertOne({
    job_name: body.job_name,
    job_description: body.job_description,
    avail_seat: body.avail_seat,
  });
  await client.close();
  res.status(200).send({
    status: "ok",
    message: "Job is created",
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
