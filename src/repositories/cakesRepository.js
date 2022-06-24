import db from "../../config/db.js"

async function insertCake(name, price, image, description, flavourId){
    return db.query(        
    `INSERT INTO cakes (name, price, image, description, "flavourId")
     VALUES ($1, $2, $3, $4, $5)`,[name, price, image, description, flavourId]
    )
}

const cakesRepository = {insertCake};

export default cakesRepository;