import { Router } from "express";
import { getProducts } from "../controllers/getProductsController.js";

const getProductsRouter = Router();
getProductsRouter.get("/products", getProducts);

export default getProductsRouter;
