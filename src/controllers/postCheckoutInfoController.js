import db from "../dataBase.js";

export async function checkoutInfo(req, res) {
  const user = res.locals.user;
  const userData = req.body;

  if (!user) {
    return res.sendStatus(403);
  }

  try {
    const userCart = await db.collection("cart").findOne({ userId: user });
    const cart = [...userCart.cart];
    const updateCart = await db
      .collection("cart")
      .updateOne(
        { userId: user, cart: cart },
        { $set: { userAddress: userData } }
      );
    if (updateCart) {
      return res.sendStatus(200);
    }
  } catch {
    res.sendStatus(500);
    return;
  }
}
