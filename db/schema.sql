### Schema  
DROP DATABASE IF EXISTS flipcards;
CREATE DATABASE flipcards;
USE flipcards;
CREATE TABLE flipcard
(
    id int NOT NULL AUTO_INCREMENT,
    category varchar(30) NOT NULL,
    question varchar(150) NOT NULL,
    answer varchar(300) NOT NULL,
    PRIMARY KEY (id)
);