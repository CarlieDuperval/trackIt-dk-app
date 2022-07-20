import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app.listen(5050, () => {
//   console.log("Listening on Port: 5050");
// });
export const api = functions.https.onRequest(app);


