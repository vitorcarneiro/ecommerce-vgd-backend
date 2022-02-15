import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function postCart(req, res) {
  const user = res.locals.user;
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
    const userCart = await db.collection("cart").findOne({ userId: user });
    if (!userCart) {
      await db.collection("cart").insertOne({
        userId: user,
        cart: [{ ...newCartItem, cartQTY: 1 }],
      });
    } else {
      let item = userCart.cart?.find( item => item.name === newCartItem.name);

      if (!item) {
        const cart = [...userCart.cart, { ...newCartItem, cartQTY: 1 }];
        const updateCart = await db
        .collection("cart")
        .updateOne({ userId: user }, { $set: { cart: cart } });
        if (updateCart) {
          return res.sendStatus(200);
        }
        
      } else {
        item.cartQTY++;
        const cart = [...userCart.cart];
        const updateCart = await db
        .collection("cart")
        .updateOne({ userId: user }, { $set: { cart: cart } });
        if (updateCart) {
          return res.sendStatus(200);
        }
      }
    }
  } catch {
    res.sendStatus(500);
  }
}