DROP DATABASE IF EXISTS camp_app_db;

CREATE DATABASE camp_app_db;
USE camp_app_db;

CREATE TABLE camperinfo (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  userPassword varchar(20) NOT NULL,
  state varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE campinglist
(
	id int NOT NULL AUTO_INCREMENT,
	items VARCHAR(45) NOT NULL,
	got_it BOOLEAN DEFAULT false,
    need_it BOOLEAN DEFAULT false,
    add_shopping_cart BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
