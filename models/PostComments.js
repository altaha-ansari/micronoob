const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Post Schema
const CommentSchema = new Schema({
    Post_num: Number,
    Email: String,
    Comment: String
});

module.exports = PostComment = mongoose.model("comment", CommentSchema);