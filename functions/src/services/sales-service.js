import { getSalesCollection } from "../gateway/connectDb";

export const createSale = async (sale) => {
    const col = await getSalesCollection()
    const { insertedId } = await col.insertOne(sale)
    sale.id = insertedId
    return sale;
}
