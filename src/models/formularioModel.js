var database = require("../database/config")

function receberForm() {
    var receberSQL = `
    SELECT COUNT(*) AS quantidade FROM formulario GROUP BY sexoUsuario;
    `;

    console.log("Executando a instrução SQL: \n" + receberSQL)
    return database.executar(receberSQL);
}

function receberAlbuns() {
    var receberSQL = `
    SELECT qtdVotos FROM album;
    `;

    console.log("Executando a instrução SQL: \n" + receberSQL)
    return database.executar(receberSQL);
}

function enviarSexo(idUsuario, sexo) {
    var enviarSQL = `
    INSERT INTO formulario (fkUsuario, sexoUsuario) VALUES ('${idUsuario}','${sexo}');
    `;

    console.log("Executando a instrução SQL: \n" + enviarSQL);

    return database.executar(enviarSQL);
}
// UPDATE formulario set album = '${album}' WHERE 

function enviarAlbum(idAlbum) {
    var enviarSQL = `
    UPDATE album set qtdVotos = qtdVotos + 1 where idAlbum = ${idAlbum};
    `;

    console.log("Executando a instrução SQL: \n" + enviarSQL);

    return database.executar(enviarSQL);
}

module.exports = {
    receberAlbuns,
    receberForm,
    enviarSexo,
    enviarAlbum
};