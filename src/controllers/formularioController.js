var formularioModel = require("../models/formularioModel");

function formPorID(req, res) {

    var idUsuario = req.params.idUsuario; //pegando parametros

    console.log(`Buscando o usuário pelo id`);

    formularioModel.formPorID(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function receberForm(req, res) {
    formularioModel.receberForm().then(function(resultado){
    res.status(200).json(resultado);
    }).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
    })
};

function receberAlbuns(req, res) {
    formularioModel.receberAlbuns().then(function(resultado){
    res.status(200).json(resultado);
    }).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
    })
};

function enviarSexo(req,res) {
    var idUsuario = req.body.usuarioServer;
    var parametroSexo = req.body.sexoServer;
    // var parametroAlbum = req.body.albumServer;

    if(parametroSexo == undefined || idUsuario == undefined) {
        res.status(400).send("Parâmentros indefinidos");
    }

    formularioModel.enviarSexo(idUsuario, parametroSexo).then(function(resultado){
        res.json(resultado)
        res.status(200).send("Resultado registrado com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function enviarAlbum(req,res) {
    // var idUsuario = req.body.usuarioServer;
    var parametroAlbum = req.body.albumServer;

    if(parametroAlbum == undefined) {
        res.status(400).send("Parâmentros indefinidos");
    }

    formularioModel.enviarAlbum(parametroAlbum).then(function(resultado){
        res.json(resultado)
        res.status(200).send("Resultado registrado com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    receberAlbuns,
    formPorID,
    receberForm,
    enviarSexo,
    enviarAlbum
};