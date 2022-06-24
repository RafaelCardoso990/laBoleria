import db from "../../config/db.js"

async function insertFlavour(name){
    return db.query(
    `INSERT INTO flavours (name)
     VALUES ($1)`,[name]
    )
}

const flavourRepository = {insertFlavour}

export default flavourRepository;