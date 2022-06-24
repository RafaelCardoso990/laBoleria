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
    flavours."name" as flavoursName,"createdAt", "quantity", "totalPrice", "isDelivered" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId"
    JOIN flavours ON flavours."id" = cakes."flavourId";
    `)
}

async function getOrdersByQuery(date){
    return db.query(`SELECT clients."id" as clientId, clients."name" as clientName,clients."address" as clientAddress,clients."phone" as clientPhone,
    cakes."id" as cakeId, cakes."name" as cakeName, cakes."price" as cakePrice,cakes."description" as cakeDescription,cakes."image" as cakeImage,
    flavours."name" as flavoursName,"createdAt", "quantity", "totalPrice", "isDelivered" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId"
    JOIN flavours ON flavours."id" = cakes."flavourId"
    WHERE orders."createdAt"::text  LIKE $1;
    `, [`${date}%`])
}

async function getOrdersByID(id){
    return db.query(`SELECT clients."id" as clientId, clients."name" as clientName,clients."address" as clientAddress,clients."phone" as clientPhone,
    cakes."id" as cakeId, cakes."name" as cakeName, cakes."price" as cakePrice,cakes."description" as cakeDescription,cakes."image" as cakeImage,
    flavours."name" as flavoursName,"createdAt", "quantity", "totalPrice", "isDelivered" from orders
    JOIN clients ON clients."id" = orders."clientId"
    JOIN cakes ON cakes."id" = orders."cakeId"
    JOIN flavours ON flavours."id" = cakes."flavourId"
    WHERE orders."id" = $1;
    `, [id])
}


async function updateIsDelivered(id){
    return db.query(`UPDATE orders SET "isDelivered" = true WHERE id = $1;`, [id])
}

const orderRepository = {insertOrder, getOrders, getOrdersByQuery, getOrdersByID, updateIsDelivered};

export default orderRepository;