import db from "../../config/db.js"

async function insertOrder(clientId, cakeId, quantity, totalPrice){
    
    return db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
     VALUES ($1, $2, $3, $4)`,[clientId, cakeId, quantity, totalPrice]
    )
}

async function getOrders(){
    return db.query(`SELECT clients."id" as clientId, clients."name" as clientName,clients."address" as clientAddress,clients."phone" as clientPhone,
    cakes."id" as cakeId, cakes."name" as cakeName, cakes."price" as cakePrice,cakes."description" as cakeDescription,cakes."image" as cakeImage,
    "createdAt", "quantity", "totalPrice" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId";
    `)
}

async function getOrdersByQuery(date){
    return db.query(`SELECT clients."id" as clientId, clients."name" as clientName,clients."address" as clientAddress,clients."phone" as clientPhone,
    cakes."id" as cakeId, cakes."name" as cakeName, cakes."price" as cakePrice,cakes."description" as cakeDescription,cakes."image" as cakeImage,
    "createdAt", "quantity", "totalPrice" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId"
    WHERE orders."createdAt" = $1;
    `, [date])
}

async function getOrdersByID(id){
    return db.query(`SELECT clients."id" as clientId, clients."name" as clientName,clients."address" as clientAddress,clients."phone" as clientPhone,
    cakes."id" as cakeId, cakes."name" as cakeName, cakes."price" as cakePrice,cakes."description" as cakeDescription,cakes."image" as cakeImage,
    "createdAt", "quantity", "totalPrice" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId"
    WHERE orders."id" = $1;
    `, [id])
}

const orderRepository = {insertOrder, getOrders, getOrdersByQuery, getOrdersByID};

export default orderRepository;