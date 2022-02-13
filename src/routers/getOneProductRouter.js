import { Router } from "express";
import { getOneProduct } from "../controllers/getOneProductController.js";

const getOneProductRouter = Router();
getOneProductRouter.get("/product:id", getOneProduct);

export default getOneProductRouter;
