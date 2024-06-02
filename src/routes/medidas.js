var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ranking", function (req, res) {
    medidaController.ranking(req, res);
});

router.get("/posicaoID/:idUsuario", function (req, res) {
    medidaController.posicaoID(req, res);
});

module.exports = router;