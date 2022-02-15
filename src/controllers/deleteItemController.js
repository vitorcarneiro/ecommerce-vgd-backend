import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function deleteItem(req, res) {
    const user = res.locals.user;
	const itemId = req.params.id;

    if (!user) {
        return res.sendStatus(403);
    }

    const cartItemToDelete = await db
        .collection("products")
        .findOne({ _id: new ObjectId(itemId) });
    if (!cartItemToDelete) {
        return res.sendStatus(404);
    }

    try {
        const userCart = await db.collection("cart").findOne({ userId: user });
        const newCart = userCart.cart.filter( item => item.name !== cartItemToDelete.name);
        
        const cart = [...newCart];
        const updateCart = await db
        .collection("cart")
        .updateOne({ userId: user }, { $set: { cart: cart } });
        if (updateCart) {
        return res.sendStatus(200);
        }
        
        
    } catch {
        res.sendStatus(500);
    }
}