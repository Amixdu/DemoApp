import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Transaction = new Schema(
    {
        title: { type: String, required: true },
        amount: { type: Number, required: true },
        type: { type: String, required: true }
    },
    { collections: 'transactions' }
)

const model = mongoose.model('Transactions', Transaction)
export default model;