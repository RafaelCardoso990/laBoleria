import flavourRepository from "../repositories/flavourRepository.js"

export async function postFlavours(req, res) {
    const { name } = req.body

    try {
        await flavourRepository.insertFlavour(name)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}