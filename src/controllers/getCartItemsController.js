import db from "../dataBase.js";

export async function getCart(req, res) {
  const user = res.locals.user;

  try {
    const cart = await db.collection("cart").find({ userId: user }).toArray();

    res.send(cart);
  } catch (error) {
    res.sendStatus(500);
    return;
  }
}
