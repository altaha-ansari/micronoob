const express = require("express");
const router = express.Router();

//Contact model
const Contact = require("../../models/Contacts");

// @route POST api/contacts
// @desc saves viewers message in database
router.post("/Contacts", (req, res) => {
    const newContact = new Contact({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Message: req.body.Message
    });
    newContact.save().then(contact => res.json(contact));
});

module.exports = router;