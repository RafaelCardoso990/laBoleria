import cakesRepository from "../repositories/cakesRepository.js"

export async function postCake(req,res){
    const {name, price, image, description, flavourId} = req.body

    try {
        await cakesRepository.insertCake(name, price, image, description, flavourId)
        res.sendStatus(201)
    } catch(error){
        console.log(error)
        
        res.status(409).send(error)
    }
}
