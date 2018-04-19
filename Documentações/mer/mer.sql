-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Empresa (
Id Integer(12) PRIMARY KEY,
Cnpj varchar(18),
Nome varchar(60),
Telefone varchar(15),
Email varchar(60)
)

CREATE TABLE Imagem (
Id Integer(12) PRIMARY KEY,
Dado blob,
Nome varchar(20),
Empresa Integer(12),
FOREIGN KEY(Empresa) REFERENCES Empresa (Id)
)

CREATE TABLE Parque (
Id Integer(12) PRIMARY KEY,
Nome varchar(60),
Empresa Integer(12),
Fundo Integer(12),
Localizacao Integer(12),
FOREIGN KEY(Empresa) REFERENCES Empresa (Id),
FOREIGN KEY(Fundo) REFERENCES Imagem (Id)
)

CREATE TABLE Localizacao (
Id Integer(12) PRIMARY KEY,
Descricao varchar(60)
)

CREATE TABLE Atracao (
Id Integer(12) PRIMARY KEY,
Nome varchar(60),
QtdTicketsEntrada Integer(4),
TempoEntrada Integer(6),
Localizacao Integer(12),
Imagem Integer(12),
FOREIGN KEY(Localizacao) REFERENCES Localizacao (Id),
FOREIGN KEY(Imagem) REFERENCES Imagem (Id)
)

CREATE TABLE Ticket (
Id Integer(12) PRIMARY KEY,
Posicao Integer(32),
HashCertificacao varchar(60),
Valido varchar(1),
Retirada DateTime,
Entrada DateTime,
Atracao Integer(12),
Usuario Integer(12),
FOREIGN KEY(Atracao) REFERENCES Atracao (Id)
)

CREATE TABLE Usuario (
Id Integer(12) PRIMARY KEY,
Celular varchar(15)
)

ALTER TABLE Parque ADD FOREIGN KEY(Localizacao) REFERENCES Localizacao (Id)
ALTER TABLE Ticket ADD FOREIGN KEY(Usuario) REFERENCES Usuario (Id)
