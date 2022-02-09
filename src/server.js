import express from "express";
import cors from "cors";
import router from "./routers/index.js";

const server = express();
server.use(express.json(), cors());

server.use(router);

server.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
