const express = require('express');
const router = express.Router();
const controllerFormulaire = require("../conrollers/conrollerFormulaire")

//VERB */

router.post("/", controllerFormulaire)



module.exports = router;    