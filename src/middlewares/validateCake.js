import db from "../../config/db.js"

export default async function validateCake(req, res,next){
    const {name, flavourId} = req.body

    try{    
        const cakesName = await db.query(`SELECT cakes."name" FROM cakes WHERE name = $1`, [name])
        
        if(cakesName.rowCount === 1){
                      
            return res.sendStatus(409)
        }
        
        const id = await db.query(`SELECT * FROM flavours WHERE id = $1`, [flavourId])

        if(id.rowCount == 0){                      
            return res.sendStatus(404)
        }

        next()
    } catch(error){
        res.sendStatus(500)
    }
}