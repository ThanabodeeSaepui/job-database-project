import "reflect-metadata";
import { SQLDataSource } from "./data-source";
import { MongoClient, ObjectId } from "mongodb";
import { env } from "./environment-var";

const uri = env.MONGODB_URL || "mongodb://127.0.0.1:27017";
const dbName = env.MONGODB_DATABASE;

import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";

import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getPage, queryToString } from "./utils";
import { Repository, Raw } from "typeorm";

const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
const port = 8080;

const JobRepository: Repository<Job> = SQLDataSource.getRepository(Job);
const CompanyRepository: Repository<Company> =
  SQLDataSource.getRepository(Company);

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ===============================Postgres SQL===============================
// ================Category================
// Read all
app.get("/api/sql/categories", async (req: Request, res: Response) => {
  const categories = await SQLDataSource.manager.find(Category);
  res.send(categories);
});

// Read by id
app.get("/api/sql/categories/:id", async (req: Request, res: Response) => {
  const category = await SQLDataSource.manager
    .createQueryBuilder(Category, "category")
    .where("category.id = :id", { id: req.params.id })
    .getOne();
  res.send(category);
});

// ================Company================
// Read all
app.get("/api/sql/companies", async (req: Request, res: Response) => {
  const page = getPage(req.query.page);
  const category = req.query.category;
  const companies = await CompanyRepository.find({
    select: {
      id: true,
      company_name: true,
    },
    // skip: (page - 1) * 10,
    // take: 10,
  });
  res.send(companies);
});

// Read by id
app.get("/api/sql/companies/:id", async (req: Request, res: Response) => {
  const company = await SQLDataSource.manager
    .createQueryBuilder(Company, "company")
    .where("company.id = :id", { id: req.params.id })
    .getOne();
  res.send(company);
});

// Create
app.post("/api/sql/companies", async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const result = await SQLDataSource.manager.save(Company, {
      company_name: body.company_name,
      address: body.address,
      contact: body.contact,
      description: body.description,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Update
app.put("/api/sql/companies/:id", async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const result = await CompanyRepository.update(req.params.id, {
      company_name: body.company_name,
      address: body.address,
      contact: body.contact,
      description: body.description,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Delete
app.delete("/api/sql/companies/:id", async (req: Request, res: Response) => {
  try {
    const result = await SQLDataSource.manager
      .createQueryBuilder()
      .delete()
      .from(Company)
      .where("id = :id", { id: req.params.id })
      .execute();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// ================Job================
// Read all
app.get("/api/sql/jobs", async (req: Request, res: Response) => {
  const page = getPage(req.query.page);
  const job = queryToString(req.query.job);
  const category = queryToString(req.query.category);
  const company = queryToString(req.query.company);
  const filter = {
    job_name: Raw((alias) => `LOWER(${alias}) Like '%${job}%'`),
    company: {
      company_name: Raw((alias) => `LOWER(${alias}) Like '%${company}%'`),
    },
    category: {
      category_name: Raw((alias) => `LOWER(${alias}) Like '%${category}%'`),
    },
  };
  const jobs = await JobRepository.find({
    select: {
      id: true,
      job_name: true,
      job_description: true,
      avail_seat: true,
      company: {
        company_name: true,
      },
      category: {
        category_name: true,
      },
    },
    relations: {
      company: true,
      category: true,
    },
    where: filter,
    skip: (page - 1) * 10,
    take: 10,
  });
  res.send(jobs);
});

// Read by id
app.get("/api/sql/jobs/:id", async (req: Request, res: Response) => {
  const job = await JobRepository.findOne({
    where: {
      id: Number(req.params.id),
    },
    select: {
      id: true,
      job_name: true,
      job_description: true,
      avail_seat: true,
      company: {
        id: true,
        company_name: true,
      },
      category: {
        id: true,
        category_name: true,
      },
    },
    relations: {
      company: true,
      category: true,
    },
  })
  res.send(job);
});

// Create
app.post("/api/sql/jobs", async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const result = await SQLDataSource.manager.save(Job, {
      job_name: body.job_name,
      job_description: body.job_description,
      avail_seat: body.avail_seat || "ไม่ระบุ",
      company: { id: Number(body.company_id) },
      category: { id: Number(body.category_id) },
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Update
app.put("/api/sql/jobs/:id", async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const result = await JobRepository.update(req.params.id, {
      job_name: body.job_name,
      job_description: body.job_description,
      avail_seat: body.avail_seat,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Delete
app.delete("/api/sql/jobs/:id", async (req: Request, res: Response) => {
  try {
    const result = await SQLDataSource.manager
      .createQueryBuilder()
      .delete()
      .from(Job)
      .where("id = :id", { id: req.params.id })
      .execute();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// ===============================MongoDB===============================
// ================Job================
// Read All
app.get("/api/nosql/jobs", async (req: Request, res: Response) => {
  const page = getPage(req.query.page);
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Job")
    .find({})
    .skip((page - 1) * 10)
    .limit(10)
    .toArray();
  await client.close();
  res.status(200).send(collection);
});

// Read by id
app.get("/api/nosql/jobs/:id", async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Job")
    .findOne({ _id: new ObjectId(req.params.id) });
  await client.close();
  res.status(200).send(collection);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

//Categories Read All
app.get("/api/nosql/categories", async (req: Request, res: Response) => {
  const page = getPage(req.query.page);
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Category")
    .find({})
    .skip((page - 1) * 10)
    .limit(10)
    .toArray();
  await client.close();
  res.status(200).send(collection);
});

//Company Read all
app.get("/api/nosql/companies", async (req: Request, res: Response) => {
  const page = getPage(req.query.page);
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Company")
    .find({})
    .skip((page - 1) * 10)
    .limit(10)
    .toArray();
  await client.close();
  res.status(200).send(collection);
});

//Read id Company
app.get("/api/nosql/companies/:id", async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Company")
    .findOne({ _id: new ObjectId(req.params.id) });
  await client.close();
  res.status(200).send(collection);
});

//Read id Category
app.get("/api/nosql/categories/:id", async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection("Category")
    .findOne({ _id: new ObjectId(req.params.id) });
  await client.close();
  res.status(200).send(collection);
});
