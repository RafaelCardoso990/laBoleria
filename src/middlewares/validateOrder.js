import db from "../../config/db.js"

export default async function validateOrder(req, res,next){
        const {clientId, cakeId, quantity} = req.body
    try{    
        const id = await db.query(`SELECT * FROM clients WHERE id = $1`, [clientId])
        

        if(id.rowCount === 0){            
            return res.sendStatus(404)
        }
       
        const idCake = await db.query(`SELECT * FROM cakes WHERE id = $1`, [cakeId])

        if(idCake.rowCount === 0){            
            return res.status(404)
        }

        if(quantity <= 0 || quantity > 5){
            return res.sendStatus(400)
        }

        next()
    } catch(error){
        res.sendStatus(500)
    }
}