const mongoose = require('mongoose');

const RegisteruserSchema = new mongoose.Schema({
    Account: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"],
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
        minLenght: 8,
        maxLength: 32,
    },
    Address: {
        type: String,
        maxLength: 100
    },
    Pincode: {
        type: Number,
        maxLength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const COLLECTION_NAME = "users";
module.exports = mongoose.model(COLLECTION_NAME, RegisteruserSchema);