var database = require("../database/config");

function ranking() {
    var instrucaoSql = ` SELECT u.nome AS usuario, MAX(quiz.qtdAcertos) AS acertos
    FROM quiz AS quiz JOIN (
        SELECT fkUsuario
        FROM quiz
        GROUP BY fkUsuario
      ) ultima ON quiz.fkUsuario = ultima.fkUsuario 
    JOIN usuario u ON quiz.fkUsuario = u.idUsuario GROUP BY u.nome order by acertos desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function posicaoID(idUsuario) {
    var posicaoPeloID = `SELECT qtdAcertos FROM quiz WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + posicaoPeloID);
    return database.executar(posicaoPeloID);
}


module.exports = {
    posicaoID,
    ranking
}
