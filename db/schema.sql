DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	name VARCHAR(55) NOT NULL,
	eaten BOOLEAN,
    PRIMARY KEY (id)
);