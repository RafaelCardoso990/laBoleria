import db from "../../config/db.js"

export default async function validateId(req, res,next){
        const {id} = req.params
    try{    
        const existId = await db.query(`SELECT * FROM orders WHERE id = $1`, [id])
        
        if(existId.rowCount === 0){
            return res.sendStatus(404)
        }
        
        next()
    } catch(error){
        res.sendStatus(500)
    }
}

