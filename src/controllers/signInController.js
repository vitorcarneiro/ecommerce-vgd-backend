import db from "../dataBase.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn(req, res) {
  const user = req.body;

  try {
    const registeredUser = await db
      .collection("users")
      .findOne({ email: user.email });
    if (
      registeredUser &&
      bcrypt.compareSync(user.password, registeredUser.password)
    ) {
      const token = uuid();

      await db.collection("sessions").insertOne({
        userId: registeredUser._id,
        token,
      });

      const userInfoResponse = { token, user: registeredUser.name };
      res.send(userInfoResponse);
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(500);
  }
}
