import { ObjectId } from "mongodb";
import { getSalesCollection } from "../gateway/connectDb";

export const createSale = async (sale) => {
    const col = await getSalesCollection()
    const { insertedId } = await col.insertOne(sale)
    sale.id = insertedId
    return sale;
}

export const getAllSales = async () => {
    const col = await getSalesCollection()
    const allSales = await col.find({}).toArray()
    return allSales
}

export const getSaleById = async (id) => {
    const col = await getAllSales()
    const sale = await col.findOne({_id: new ObjectId(id) })
    return sale 
}

export const updateSales = async (id, updateObj) => {
    const col = await getSalesCollection()
    await col.updateOne({_id: new ObjectId(id)}, {$set: updateObj})
}