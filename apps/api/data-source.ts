import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Category, Job, Company],
  synchronize: true, // !! change to false when production
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
