import { Router } from "express";
import { checkoutInfo } from "../controllers/postCheckoutInfoController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const registerCheckoutInfoRouter = Router();

registerCheckoutInfoRouter.post(
  "/checkout",
  tokenValidationMiddleware,
  checkoutInfo
);

export default registerCheckoutInfoRouter;
