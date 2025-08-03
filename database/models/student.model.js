import mongoose  from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String, 
} , {timestamps: true , versionKey: false});

export const Student = mongoose.model('Student', schema)
