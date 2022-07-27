import { Router } from "express"
import {
    createSale,
    updateSales,
    getAllSales,
    updateSales
} from '../services/sales-service.js'

export const salesRouter = Router()

salesRouter.post('sales', async (req, res)=>{
    const { year, productName, productCategory, qtySold} = req.body
    if(!year|| !productName|| !productCategory){
        res.status(401).send('Invalid Request')
    }
})