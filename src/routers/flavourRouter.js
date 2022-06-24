import { Router } from "express";

import { postFlavours } from "../controllers/flavouController.js";

import validateFlavour from "../middlewares/validateFlavour.js";

import schemaValidator from "../middlewares/validateSchema.js";

import flavourSchemas from "../schemas/flavourSchemas.js";


const flavouRouter = Router()

flavouRouter.post("/flavours", schemaValidator(flavourSchemas), validateFlavour, postFlavours)

export default flavouRouter;