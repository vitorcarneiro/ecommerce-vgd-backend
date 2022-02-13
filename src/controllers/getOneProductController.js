import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function getOneProduct(req, res) {
  const cartItem = req.params;
  console.log(cartItem);

  try {
    const newCartItem = await db
      .collection("products")
      .findOne({ _id: new ObjectId(cartItem.id) });
    if (!newCartItem) {
      return res.sendStatus(404);
    }
    res.send(newCartItem);
  } catch {
    res.sendStatus(500);
  }
}
