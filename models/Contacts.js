const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Viewers Contact Schema
const ContactsSchema = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Message: String
});

module.exports = Contacts = mongoose.model("contact", ContactsSchema);