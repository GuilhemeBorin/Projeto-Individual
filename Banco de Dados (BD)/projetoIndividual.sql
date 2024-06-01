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

SELECT * FROM usuario;
SELECT * FROM quiz;