import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import transactionRoutes from './routes/transactions.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use('/transactions', transactionRoutes)

app.get('/', (req, res) => {
    return res.send('Server Is Running! 💖')
})

mongoose.connect(process.env.MONGO_STRING)
    .then(() => app.listen(PORT, () => {
        console.log("Successfully connected to database!")
        console.log(`Started on: http://localhost:${PORT}/`)
    }))
    .catch((err) => console.log(err))