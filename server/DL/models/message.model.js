const mongoose = require("mongoose");

//This code defines the form of the collection
//in the database and actually creates it
//call this code from another file to create the schma

//Creating legitimacy for the schema
const messageSchema = new mongoose.Schema({
    to: [{
        type: String,
        require: true
    }],

    from: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now
    },
    
    content:String,
    subject:String

});

//Make schema 
const messageModel = mongoose.model("message", messageSchema);

module.exports =  messageModel ;