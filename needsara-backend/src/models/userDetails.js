const mongoose = require("mongoose")

const userDetailsSchema = new mongoose.Schema({
            userName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            password : {
                type: String,
                required: true
            },
            phoneNumber :{
                type: Number,
                required: true,
                unique: true
            },
            date: {
                type: Date ,
                default: Date.now
            }
})

// Now we need to create a collection

const UserDetails = new mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails; 