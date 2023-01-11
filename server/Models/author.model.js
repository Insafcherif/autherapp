const mongoose  = require("mongoose");

const AuthorSchema  = new mongoose.Schema({
    Name: {
        type:String,
        required :[true, "Name of author required 😡😡"],
        minlength: [3, "Last Name of author must be at least 3 characters 😡😡"]
    },
},{timestamps: true})

const Author = mongoose.model('author', AuthorSchema)
module.exports = Author