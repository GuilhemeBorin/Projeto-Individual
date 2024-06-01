var database = require("../database/config")

function receber() {
    var receberSQL = `
    SELECT * FROM quiz;
    `;

    console,log("Executando a instrução SQL: \n" + receberSQL)
    return database.executar(receberSQL);
}

function enviar(idQuiz, qtdAcertos) {
    var enviarSQL = `
    INSERT INTO quiz (fkUsuario, qtdAcertos) VALUES ('${idQuiz}','${qtdAcertos}')
    `;

    console.log("Executando a instrução SQL: \n" + enviarSQL);

    return database.executar(enviarSQL);
}

module.exports = {
    receber,
    enviar
};