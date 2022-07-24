import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

export const getDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    return client.db("TrackIt-Dk")
}

export const getSalesCollection = async () => {
    const db = await getDb
}