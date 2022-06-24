import Joi from "joi";

const flavourSchemas = Joi.object({
    name: Joi.string().min(2).required(),
})

export default flavourSchemas;