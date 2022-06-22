import Joi from "joi";

const cakeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().positive(),
    description: Joi.string().allow(null, ""),
    image: Joi.string().uri().required(),
})

export default cakeSchema;