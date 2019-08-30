const express = require("express");
const router = express.Router();
//Comment model
const Comment = require("../../models/PostComments");

// @route GET api/Comments/id
// @desc Get All post comments
// @access Admin
router.get("/comments/:id", (req, res) => {
    Comment.find({ Post_num: req.params.id }).then(posts => res.json(posts));
});

// @route POST api/Comments/id
// @desc creates a post comment
// @access Admin
router.post("/comments/:id", (req, res) => {
    const newComment = new Comment({
        Post_num: req.params.id,
        Email: req.body.Email,
        Comment: req.body.Comment
    });
    newComment.save().then(cmnt => res.json(cmnt));
});

// @route DELETE api/Comments/id
// @desc DELETE A comment
// @access Admin
router.delete("/comments/:id", (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
        .then(() => res.json({ comment_deleted: true }))
        .catch(err => res.status(404).json({ comment_deleted: false }));
});
module.exports = router;