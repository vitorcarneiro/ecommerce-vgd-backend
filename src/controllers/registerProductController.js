import db from "../dataBase.js";

export async function registerProduct(req, res) {
  const product = req.body;

  const productExist = await db
    .collection("products")
    .insertOne({ name: product.name });

  if (productExist) {
    res.sendStatus(409);
    return;
  }

  try {
    await db.collection("products").insertOne(product);
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}