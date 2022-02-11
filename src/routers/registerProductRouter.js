import { Router } from "express";
import { registerProduct } from "../controllers/registerProductController.js";
import { registerProductSchemaValidationMiddleware } from "../middlewares/registerProductValidationMiddleware.js";

const registerProductRouter = Router();
registerProductRouter.post("/registerProduct", registerProductSchemaValidationMiddleware, registerProduct);

export default registerProductRouter;