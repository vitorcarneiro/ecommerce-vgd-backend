import { Router } from "express";
import { deleteItem } from "../controllers/deleteItemController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const deleteItemCart = Router();
deleteItemCart.use(tokenValidationMiddleware);
deleteItemCart.delete("/cart", deleteItem);

export default deleteItemCart;
