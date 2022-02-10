import express, { json } from "express";
import cors from "cors";
import router from "./routers/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
