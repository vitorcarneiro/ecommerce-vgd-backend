import { Router } from "express";
import { deleteItem } from "../controllers/deleteItemController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const deleteItemCart = Router();
deleteItemCart.delete("/cart/:id", deleteItem);
deleteItemCart.use(tokenValidationMiddleware);

export default deleteItemCart;
