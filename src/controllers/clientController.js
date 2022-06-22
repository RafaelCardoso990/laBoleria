

import clientRepository from "../repositories/clientRepository.js"

export async function postClient(req,res){
    const {name, address, phone} = req.body
    
    try {
        await clientRepository.insertClient(name, address, phone)
        res.sendStatus(201)
    } catch(error){
        console.log(error)
        res.status(409).send(error.detail)
    }
}

export async function getOrdersClientById(req,res){
    const {id} = req.params

    try{
        const orders = await clientRepository.getOrdersClientById(id)
        
        if(orders.rowCount == 0){
            return res.status(404).send("No orders found")
        }

        res.status(200).send(orders.rows)

    } catch(error){
        res.status(500).send(error)
    }
}