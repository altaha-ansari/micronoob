const express = require("express");
const router = express.Router();

//Post model
const Post = require("../../models/Post");
// @route GET api/posts/limited/:lim
// @desc Get limited posts
// @access Admin
router.get("/Posts/Limited/:lim/:skip", (req, res) => {
    Post.find()
        .skip(parseInt(req.params.skip))
        .limit(parseInt(req.params.lim))
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json(err));
});

// @route GET api/posts/skip/:skip
// @desc Get limited and skipped posts
// @access Admin
router.get("/Posts/Skip/:skip", (req, res) => {
    Post.find()
        .skip(parseInt(req.params.skip))
        .limit(1)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json(err));
});

//@route GET api/posts/id
//@desc To find a specific post
router.get("/Posts/:id", (req, res) => {
    Post.findOne({ Post_num: req.params.id })
        .then(post => res.json(post))
        .catch(err => res.status(404).json(err));
});

//@route GET api/posts/search/keyword
//@desc To search for posts
router.get("/Posts/Search/:keyword", (req, res) => {
    let regex = new RegExp(req.params.keyword, "i");
    Post.find({ Tags: regex }, { Title: 1, Post_num: 1 })
        .then(post => res.json(post))
        .catch(err => res.status(404).json(err));
});

//@route GET api/posts/related/keyword
//@desc To return related posts with matching tags
router.get("/Posts/Related/:keyword", (req, res) => {
    let regex = new RegExp(req.params.keyword, "i");
    Post.find({ Tags: regex }, { Title: 1, Post_num: 1 })
        .then(post => res.json(post))
        .catch(err => res.status(404).json(err));
});

// @route POST api/posts
// @desc creates a post
// @access Admin
router.post("/Posts", (req, res) => {
    const newPost = new Post({
        Author: req.body.Author,
        Title: req.body.Title,
        Body: req.body.Body,
        Tags: req.body.Tags,
        Post_num: req.body.Post_num
    });
    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

// @route DELETE api/posts
// @desc DELETE A post
// @access Admin
router.delete("/Posts/:id", (req, res) => {
    Post.deleteOne({ Post_num: req.params.id })
        .then(() => res.json({ post_deleted: true }))
        .catch(err => res.status(404).json({ post_deleted: false }));
});
module.exports = router;