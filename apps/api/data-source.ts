import Category from "./entitiy/Category";
import Job from "./entitiy/Job";
import Company from "./entitiy/Company";
import { DataSource } from "typeorm";
import { env } from "./environment-var";

export const SQLDataSource = new DataSource({
  type: "postgres",
  host: env.PG_DB_HOSTNAME,
  port: 5432,
  username: env.PG_DB_USERNAME,
  password: env.PG_DB_PASSWORD,
  database: env.PG_DB_NAME,
  // url: undefined || env.PG_DB_URL,
  entities: [Category, Job, Company],
  synchronize: false, // !! change to false when production
  logging: false,
});

SQLDataSource.initialize()
  .then(() => {
    console.log("SQL DataSource connection initialize");
  })
  .catch((error) => console.log(error));
