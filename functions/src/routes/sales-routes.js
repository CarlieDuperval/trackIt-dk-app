import { Router } from "express"
import {
    createSale,
    updateSales,
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