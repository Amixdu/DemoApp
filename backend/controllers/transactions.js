import Transaction from '../models/transaction.model.js'
import dotenv from 'dotenv'
dotenv.config()

export const addTransaction = async (req, res) => {
    try {
        await Transaction.create({
            title: req.body.title,
            amount: req.body.amount,
            type: req.body.type
        })
        res.json({ status: "success" })
    } catch (e) {
        console.log(e)
        res.json({ status: "fail" })
    }
}

export const getTransactions = async (req, res) => {
    try {
        const data = await Transaction.find()
        return res.json({ status: "success", transactions: data })
    } catch (e) {
        return res.json({ status: "fail" })
    }
}