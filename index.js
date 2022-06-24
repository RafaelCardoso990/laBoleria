import express,{ json } from "express";

import dotenv from "dotenv";

import cakeRouter from "./src/routers/cakeRouter.js";
import clientRouter from "./src/routers/clientRouter.js";
import orderRouter from "./src/routers/orderRouter.js";
import flavouRouter from "./src/routers/flavourRouter.js";

dotenv.config();

const app = express()

app.use(json())
app.use(cakeRouter)
app.use(clientRouter)
app.use(orderRouter)
app.use(flavouRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})