import joi from "joi";

const signInSchema = joi.object({
  name: joi.string().required(),
  password: joi.string().required(),
});

export { signInSchema };
