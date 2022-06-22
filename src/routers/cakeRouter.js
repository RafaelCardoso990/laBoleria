import { Router } from "express";

import { postCake } from "../controllers/cakesController.js";

import validateCake from "../middlewares/validateCake.js";

import schemaValidator from "../middlewares/validateSchema.js";

import cakeSchema from "../schemas/cakeSchemas.js";

const cakeRouter = Router()

cakeRouter.post("/cakes", schemaValidator(cakeSchema), validateCake, postCake)

export default cakeRouter;