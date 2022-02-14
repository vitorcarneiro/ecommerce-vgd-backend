import { ObjectId } from "mongodb";
import db from "../dataBase.js";

export async function deleteItem(req, res) {
    console.log('entrou');
    const user = res.locals.user;
    const cartItem = req.body;
    console.log(req.body);

    if (!user) {
        return res.sendStatus(403);
    }

    const cartItemToDelete = await db
        .collection("products")
        .findOne({ _id: new ObjectId(cartItem.id) });
    if (!cartItemToDelete) {
        return res.sendStatus(404);
    }

    try {
        const userCart = await db.collection("cart").findOne({ userId: user });

        let item = userCart.cart.find( item => item.name === cartItemToDelete.name);
        
            const cart = [...userCart.cart];
            const updateCart = await db
            .collection("cart")
            .removeOne({ userId: user }, { $set: { cart: cart } });
            if (updateCart) {
            return res.sendStatus(200);
            }
        
        
    } catch {
        res.sendStatus(500);
    }
}