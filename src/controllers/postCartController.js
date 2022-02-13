import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function postCart(req, res) {
  const session = req.locals.session;
  const cartItem = req.body;

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
    const userCart = await db
      .collection("cart")
      .findOne({ userId: session.user });
    if (!userCart) {
      await db.collection("cart").insertOne({
        userId: user,
        cart: [cartItem],
      });
    } else if (userCart) {
      const cart = [...cart, newCartItem];
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
