import db from "../../config/db.js"

export default async function validateFlavour(req, res,next){
    const {name} = req.body
    
try{    
    const flavourName = await db.query(`SELECT * FROM flavours WHERE name = $1`, [name])
    
    if(flavourName.rowCount == 1){        
        return res.sendStatus(409)
    }
    
    next()
} catch(error){
    console.log(error)
    res.sendStatus(500)
}
}