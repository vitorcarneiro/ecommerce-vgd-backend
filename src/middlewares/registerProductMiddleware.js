import registerProductSchema from "../schemas/registerProductSchema.js";

export function registerProductSchemaValidationMiddleware(req, res, next) {
  const products = req.body;
  const validation = registerProductSchema.validate(user);
  if (validation.error) {
    res.sendStatus(422);
    return;
  }
  next();
}