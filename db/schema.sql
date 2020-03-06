### Schema  
DROP DATABASE IF EXISTS flipcards;

CREATE DATABASE flipcards;

USE flipcards;

CREATE TABLE flipcard
(
    id int NOT NULL AUTO_INCREMENT,
    category varchar(30) NOT NULL,
    question varchar(150) NOT NULL,
    answer TEXT,
    PRIMARY KEY (id)
);


CREATE TABLE newsletter
(
    id int NOT NULL AUTO_INCREMENT,
    fname varchar(100) NOT NULL,
    lname varchar(100) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY (id)
);