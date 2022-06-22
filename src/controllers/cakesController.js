import cakesRepository from "../repositories/cakesRepository.js"

export async function postCake(req,res){
    const {name, price, image, description} = req.body

    try {
        await cakesRepository.insertCake(name, price, image, description)
        res.sendStatus(201)
    } catch(error){
        res.status(409).send(error.detail)
    }
}
