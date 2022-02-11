import joi from "joi";

const registerProductSchema = joi.object({
  name: joi.string().required(),
  img: joi.string().pattern(new RegExp('(https?:\/\/.*\.(?:jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF))')).required(),
  price: joi.number().positive().required(),
  inStock: joi.number().required(),
  isHighLight: joi.boolean()
});

export default registerProductSchema;