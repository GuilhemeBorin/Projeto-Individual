var quizModel = require("../models/quizModel");

function receber(req, res) {
    quizModel.receber().then(function(resultado){
    res.status(200).json(resultado);
    }).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
    })
};

function enviar(req,res) {
    var resultadoQuiz = req.body.scoreServer;
    var idUsuario = req.body.usuarioServer;

    if(resultadoQuiz == undefined || idUsuario == undefined) {
        res.status(400).send("Parâmentros indefinidos");
    }

    quizModel.enviar(idUsuario, resultadoQuiz).then(function(resultado){
        res.json(resultado)
        res.status(200).send("Resultado registrado com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    receber,
    enviar
};