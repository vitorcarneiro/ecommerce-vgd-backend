import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function postCart(req, res) {
  const user = res.locals.user;
  const cartItem = req.body;
  console.log(cartItem);

  if (!user) {
    return res.sendStatus(403);
  }

  const newCartItem = await db
    .collection("products")
    .findOne({ _id: new ObjectId(cartItem.id) });
  if (!newCartItem) {
    return res.sendStatus(404);
  }

  try {
    const userCart = await db.collection("cart").findOne({ userId: user });
    if (!userCart) {
      await db.collection("cart").insertOne({
        userId: user,
        cart: [cartItem],
      });
    } else {
      const cart = [...userCart.cart, cartItem];
      const updateCart = await db
        .collection("cart")
        .updateOne({ userId: user }, { $set: { cart: cart } });
      if (updateCart) {
        return res.sendStatus(200);
      }
    }
  } catch {
    res.sendStatus(500);
  }
}
