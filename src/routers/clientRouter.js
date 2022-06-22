import { Router } from "express";

import { getOrdersClientById, postClient } from "../controllers/clientController.js";

import validateClientId from "../middlewares/validateClientId.js";

import schemaValidator from "../middlewares/validateSchema.js";

import clientSchema from "../schemas/clientSchemas.js";

const clientRouter = Router()

clientRouter.post("/clients", schemaValidator(clientSchema), postClient)
clientRouter.get("/clients/:id/orders", validateClientId, getOrdersClientById)

export default clientRouter;