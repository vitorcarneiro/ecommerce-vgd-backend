import { Router } from "express";
import { getCart } from "../controllers/getCartItemsController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const getCartRouter = Router();
getCartRouter.use(tokenValidationMiddleware);
getCartRouter.get("/cart", getCart);

export default getCartRouter;
