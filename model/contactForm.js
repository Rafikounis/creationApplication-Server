const mongoose = require("mongoose");

const ContactForm = mongoose.model("ContactForm", {
    nom: String,
    prenom: String,
    mail: String,
    tel: String,
    message: String,
    date: String
});

module.exports = ContactForm;