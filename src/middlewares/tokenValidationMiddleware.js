import db from "../dataBase.js";

export async function tokenValidationMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  console.log(token);

  if (!token) return res.sendStatus(401);

  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    res.sendStatus(401);
  }

  res.locals.user = user;
  console.log("user", res.locals.user);
  next();
}
