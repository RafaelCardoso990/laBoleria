import { Router } from "express";

import { getOrders, getOrdersByID, postOrder } from "../controllers/orderController.js";

import validateId from "../middlewares/validateid.js";

import validateOrder from "../middlewares/validateOrder.js";

const orderRouter = Router()

orderRouter.post("/order", validateOrder, postOrder)
orderRouter.get("/orders", getOrders)
orderRouter.get("/orders/:id", validateId, getOrdersByID)

export default orderRouter;