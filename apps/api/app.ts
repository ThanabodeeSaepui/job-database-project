import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
