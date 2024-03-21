const mongoose = require("mongoose");
require('./message.model');

//This code defines the form of the collection
//in the database and actually creates it
//call this code from another file to create the schma

//Creating legitimacy for the schema
const emailSchema = new mongoose.Schema({
    subject: {
        type: String,
    },

    msg: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'message'
        }
    ],

    lastDate: {
        type: Date,
        default: Date
    },

    isRead: {
        type: Boolean,
        default: false,
    },

});



//Make schema 
const emailModel = mongoose.model("email", emailSchema);

module.exports =  emailModel ;