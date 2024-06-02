-- CREATE DATABASE projetoindividual;
-- USE projetoindividual;

-- CREATE TABLE usuario (
--     idUsuario INT PRIMARY KEY AUTO_INCREMENT,
--     nome VARCHAR(45),
--     email VARCHAR(45),
--     senha VARCHAR(45),
--     idade CHAR(5)
-- );

-- CREATE TABLE quiz (
--     idQuiz INT PRIMARY KEY AUTO_INCREMENT,
--     fkUsuario INT,
--     qtdPerguntas INT DEFAULT 11, 
--     qtdAcertos INT,
--     FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
-- );

-- create table album (
-- idAlbum int primary key auto_increment,
-- nomeAlbum varchar(50),
-- qtdVotos int
-- );

-- create table formulario (
-- idForm int primary key auto_increment,
-- fkUsuario int,
-- sexoUsuario char(1),
-- fkAlbum int,
-- foreign key (fkAlbum) references album(idAlbum),
-- foreign key (fkUsuario) references usuario(idUsuario)
-- );

-- INSERT INTO album (nomeAlbum) VALUES 
-- ('O Rappa'),
-- ('Rappa Mundi'),
-- ('Lado B Lado A'),
-- ('O Silêncio Q Precede o Esporro'),
-- ('7 Vezes'),
-- ('Nunca Tem Fim...'),
-- ('Nao Possui');


-- SELECT * FROM usuario;
-- SELECT * FROM quiz;
-- SELECT * FROM album;