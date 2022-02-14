import db from "../dataBase.js";

export async function getProducts(req, res) {
  try {
    console.log("ok");
    const products = await db.collection("products").find().toArray()
    res.send(products);
    
  } catch (error) {
    res.sendStatus(500)
    return
  }
}