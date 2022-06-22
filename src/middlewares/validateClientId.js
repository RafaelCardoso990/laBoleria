import db from "../../config/db.js"

export default async function validateClientId(req, res,next){
    const {id} = req.params
    console.log(id)
try{    
    const existId = await db.query(`SELECT * FROM clients WHERE id = $1`, [id])
    
    if(existId.rowCount == 0){        
        return res.sendStatus(404)
    }
    
    next()
} catch(error){
    console.log(error)
    res.sendStatus(500)
}
}