import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const SQLDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Category, Job, Company],
  synchronize: false, // !! change to false when production
  logging: false,
});

SQLDataSource.initialize()
  .then(() => {
    console.log("DataSource connection initialize");
  })
  .catch((error) => console.log(error));
