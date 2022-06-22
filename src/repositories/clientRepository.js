import db from "../../config/db.js"

async function insertClient(name, address, phone){
    return db.query(
    `INSERT INTO clients (name, address, phone)
     VALUES ($1, $2, $3)`,[name, address, phone]
    )
}

async function getOrdersClientById(id){
    return db.query(`
    select orders."id" as orderId, quantity, "createdAt", "totalPrice", cakes."name" as cakeName from orders 
    join cakes on cakes."id" = orders."cakeId"
    where orders."clientId" = $1;
    `, [id])
}

const clientRepository = {insertClient, getOrdersClientById};

export default clientRepository;