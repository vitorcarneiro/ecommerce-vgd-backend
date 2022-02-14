import { Router } from "express";
import signInRouter from "./signInRouter.js";
import signUpRouter from "./signUpRouter.js";
import getProductsRouter from "./getProductsRouter.js";
import registerProductRouter from "./registerProductRouter.js";
import postUserCart from "./postUserCart.js";
import getCartRouter from "./getUserCart.js";
import registerCheckoutInfo from "./registerCheckoutInfo.js";

const router = Router();
router.use(signUpRouter);
router.use(signInRouter);

router.use(getProductsRouter);
router.use(registerProductRouter);

router.use(registerCheckoutInfo);

router.use(postUserCart);
router.use(getCartRouter);

export default router;
