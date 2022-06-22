import db from "../../config/db.js"

export default async function validateCake(req, res,next){
    const {name} = req.body

    try{    
        const cakesName = await db.query(`SELECT cakes."name" FROM cakes WHERE name = $1`, [name])
        
        if(cakesName.rowCount === 1){
            console.log("entrei")            
            return res.sendStatus(409)
        }

        next()
    } catch(error){
        res.sendStatus(500)
    }
}