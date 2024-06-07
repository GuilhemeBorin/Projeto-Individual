CREATE DATABASE projetoindividual;
USE projetoindividual;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    idade CHAR(5)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    qtdPerguntas INT DEFAULT 11, 
    qtdAcertos INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE album (
    idAlbum INT PRIMARY KEY AUTO_INCREMENT,
    nomeAlbum VARCHAR(50),
    qtdVotos INT DEFAULT 0
);

CREATE TABLE formulario (
    idForm INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    sexoUsuario CHAR(1),
    FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario)
);
-- o método que usei para criação do formulário só pega 1 valor, portanto, ele não consegue reconhecer de qual album o valor esta vindo, a não ser que seja através do id do album, por isso criei os valores dos albuns com o id. A unica coisa que altero é a qtd de voto, cada vez que atualizar, ganha +11.

INSERT INTO album (nomeAlbum) VALUES 
('O Rappa'),
('Rappa Mundi'),
('Lado B Lado A'),
('O Silêncio Q Precede o Esporro'),
('7 Vezes'),
('Nunca Tem Fim...'),
('Nao Possui');

SELECT sexoUsuario, COUNT(*) AS quantidade FROM formulario GROUP BY sexoUsuario;
SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM album;
select * from formulario;

-- drop database projetoindividual;

INSERT INTO formulario (fkUsuario, sexoUsuario) VALUES (1,'M');