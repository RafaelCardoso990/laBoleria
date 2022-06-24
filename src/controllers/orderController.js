import orderRepository from "../repositories/orderRepository.js"

export async function postOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body

    try {
        await orderRepository.insertOrder(clientId, cakeId, quantity, totalPrice)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

export async function getOrders(req, res) {
    const { date } = req.query

    if (date) {
        try {
            const orders = await orderRepository.getOrdersByQuery(date)

            if (orders.rowCount === 0) {
                return res.status(404).send([])
            }
            

            const object = orders.rows.map(order => {
                const { clientid, clientname, clientaddress, clientphone,
                    cakeid, cakename, cakeprice, cakedescription, cakeimage,
                    flavoursname, createdAt, quantity, totalPrice, isDelivered } = order
                return {
                    client: {
                        id: clientid,
                        name: clientname,
                        address: clientaddress,
                        phone: clientphone
                    },
                    cake: {
                        id: cakeid,
                        name: cakename,
                        price: cakeprice,
                        description: cakedescription,
                        image: cakeimage,
                        flavour: flavoursname
                    },
                    createdAt: createdAt,
                    quantity: quantity,
                    totalPrice: totalPrice,
                    isDelivered: isDelivered
                }
            })

            res.status(200).send(object)

        } catch (error) {
            res.status(500).send(error)
        }

    } else {
        try {
            const orders = await orderRepository.getOrders()
            
            if (orders.rowCount === 0) {
                return res.status(404).send([])
            }
            console.log(orders.rows)
            const object = orders.rows.map(order => {
                const { clientid, clientname, clientaddress, clientphone,
                    cakeid, cakename, cakeprice, cakedescription, cakeimage,
                    flavoursname, createdAt, quantity, totalPrice, isDelivered } = order
                return {
                    client: {
                        id: clientid,
                        name: clientname,
                        address: clientaddress,
                        phone: clientphone
                    },
                    cake: {
                        id: cakeid,
                        name: cakename,
                        price: cakeprice,
                        description: cakedescription,
                        image: cakeimage,
                        flavour: flavoursname
                    },
                    createdAt: createdAt,
                    quantity: quantity,
                    totalPrice: totalPrice,
                    isDelivered: isDelivered
                }
            })

            res.status(200).send(object)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export async function getOrdersByID(req, res) {
    const { id } = req.params

    try {
        const orders = await orderRepository.getOrdersByID(id)

        if (orders.rowCount === 0) {
            return res.status(404).send([])
        }

        const object = orders.rows.map(order => {
            const { clientid, clientname, clientaddress, clientphone,
                cakeid, cakename, cakeprice, cakedescription, cakeimage,
                flavoursname, createdAt, quantity, totalPrice, isDelivered } = order
            return {
                client: {
                    id: clientid,
                    name: clientname,
                    address: clientaddress,
                    phone: clientphone
                },
                cake: {
                    id: cakeid,
                    name: cakename,
                    price: cakeprice,
                    description: cakedescription,
                    image: cakeimage,
                    flavour: flavoursname
                },
                createdAt: createdAt,
                quantity: quantity,
                totalPrice: totalPrice,
                isDelivered: isDelivered
            }
        })

        res.status(200).send(object)
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function updateIsDelivered(req,res){
    const {id} = req.params

    try{

        await orderRepository.updateIsDelivered(id)
        res.sendStatus(204)

    } catch(error){
        res.sendStatus(500)
    }
}