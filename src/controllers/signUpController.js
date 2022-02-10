import db from "../dataBase.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  const user = req.body;

  const emailExists = await db
    .collection("users")
    .findOne({ email: user.email });

  if (emailExists || user.password !== user.confirmPassword) {
    res.sendStatus(409);
    return;
  }

  const passwordHash = bcrypt.hashSync(user.password, 9);

  try {
    await db.collection("users").insertOne({
      name: user.name,
      email: user.email,
      password: passwordHash,
    });
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}
