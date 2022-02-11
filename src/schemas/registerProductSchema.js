import joi from "joi";

const registerProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().positive().required(),
  inStock: joi.number().required()
});

export default registerProductSchema;
