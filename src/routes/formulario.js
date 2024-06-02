var express = require ("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController")

router.get("/formPorID/:idUsuario", function(req,res) {
    formularioController.formPorID(req,res);
});

router.post("/enviarSexo", function(req,res) {
    formularioController.enviarSexo(req, res);
});

router.post("/enviarAlbum", function(req,res) {
    formularioController.enviarAlbum(req, res);
});

// RECEBER
router.get("/receberForm", function(req,res) {
    formularioController.receberForm(req,res);
});

module.exports = router;