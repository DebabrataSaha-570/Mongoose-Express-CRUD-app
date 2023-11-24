import Joi from 'joi';

const fullNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
});

const addressValidationSchema = Joi.object({
  street: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  country: Joi.string().trim().required(),
});

const orderValidationSchema = Joi.object({
  productName: Joi.string().trim().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  fullName: fullNameValidationSchema.required(),
  age: Joi.number().required(),
  email: Joi.string().email().trim().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string().required()).required(),
  address: addressValidationSchema.required(),
  orders: Joi.array().items(orderValidationSchema),
});

export default userValidationSchema;
