import registerProductSchema from "../schemas/registerProductSchema.js";

export function registerProductSchemaValidationMiddleware(req, res, next) {
  const product = req.body;
  const validation = registerProductSchema.validate(product);
  if (validation.error) {
    res.sendStatus(422);
    return;
  }
  next();
}