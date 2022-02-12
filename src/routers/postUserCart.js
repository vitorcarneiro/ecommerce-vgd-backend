import { Router } from "express";
import { postCart } from "../controllers/postCartController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const postUserCart = Router();
postUserCart.use(tokenValidationMiddleware);
postUserCart.post("/cart", postCart);

export default postUserCart;
