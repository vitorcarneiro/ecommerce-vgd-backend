import { Router } from "express";
import signInRouter from "./signInRouter.js";
import signUpRouter from "./signUpRouter.js";
import getProductsRouter from "./getProductsRouter.js";
import registerProductRouter from "./registerProductRouter.js";

const router = Router();
router.use(signUpRouter);
router.use(signInRouter);

router.use(getProductsRouter);
router.use(registerProductRouter);

export default router;
