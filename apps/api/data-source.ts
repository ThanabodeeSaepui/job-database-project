import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";
import { DataSource } from "typeorm";
import { env } from "./environment-var";

export const SQLDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: env.PG_DB_USERNAME,
  password: env.PG_DB_PASSWORD,
  database: env.PG_DB_NAME,
  entities: [Category, Job, Company],
  synchronize: false, // !! change to false when production
  logging: false,
});

SQLDataSource.initialize()
  .then(() => {
    console.log("SQL DataSource connection initialize");
  })
  .catch((error) => console.log(error));
