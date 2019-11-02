const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Post Schema
const PostSchema = new Schema({
    Author: String,
    Date: { type: Date, default: Date.now },
    Title: String,
    Body: String,
    Tags: String,
    Post_num: Number,
    Image_url: String
});

module.exports = Post = mongoose.model("post", PostSchema);