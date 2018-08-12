/* Drop Database if exists */
DROP DATABASE IF EXISTS burgers_db;
/* Create Database */
CREATE DATABASE burgers_db;

USE burgers_db;

/* Create a table */
CREATE TABLE burgers (

	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(180) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);