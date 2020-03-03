DROP DATABASE IF EXISTS `flipcards_db`;
CREATE DATABASE `flipcards_db`;

USE flipcards_db;

CREATE TABLE flipcards
(
	id int NOT NULL AUTO_INCREMENT,
	category varchar(30) NOT NULL,
    question varchar(150) NOT NULL,
    answer varchar(300) NOT NULL,
	PRIMARY KEY (id)
);

