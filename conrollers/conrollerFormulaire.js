const ContactForm = require("../model/contactForm");
const moment = require("moment");

/* Model*/

const controllerFormulaire = (req, res, next) =>{
    const form = req.body;

    const newMessage = new ContactForm ({
        nom: form.nom,
        prenom: form.prenom,
        mail: form.mail,
        tel: form.tel,
        message: form.message,
        date: moment().format("D MM YYYY, h:mm"),
    })

    newMessage.save({}, (err) => {
        if (err) {
          res.status(500).send("Not saved on mongoAtlas!");
        } else {
          res.send("formulaire envoyé");
        }
      });
} 
module.exports = controllerFormulaire;