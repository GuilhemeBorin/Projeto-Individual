var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/enviar",function (req,res) {
    quizController.enviar(req,res);
});

router.get("/receber",function(req,res) {
    quizController.receber(req, res);
});

module.exports = router;