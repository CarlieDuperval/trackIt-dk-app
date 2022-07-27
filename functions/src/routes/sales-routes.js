import { Router } from "express"
import {
    createSale,
    getAllSales,
    updateSales
} from '../services/sales-service.js'

export const salesRouter = Router()

salesRouter.post('sales', async (req, res)=>{
    const { year, productCode, productDescription, productCategory, price, qtySold} = req.body
    if(!year|| !productCode|| !productCategory){
        res.status(401).send('Invalid Request')
    }

    const sale ={
        year,
        productCode,
        productDescription,
        productCategory,
        price,
        qtySold
    }
    const result = await createSale(sale)
    res.status(201).send(result)
})

salesRouter.get('sales', async (req, res) => {
    const allSales = await getAllSales()
    res.status(201).send(allSales)
})

salesRouter.patch('/sales/:id', async (req, res) => {
    try {
        const {id } = req.params
        const updateSale = await updateSales(id)
        res.status(201).send(updateSale)
    } catch (error) {
        console.error(error)
        
    }

})