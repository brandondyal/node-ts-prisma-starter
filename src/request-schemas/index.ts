import Joi from 'joi';

export const userSchemas = {
  createUser: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
  getByEmail: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
  updateUser: Joi.object()
    .keys({
      email: Joi.string().email().optional(),
    })
    .required()
    .min(1)
    .messages({
      'object.min': 'Must provide at least one property to update.',
    }),
};
