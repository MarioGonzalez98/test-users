CREATE SCHEMA `test` ;

CREATE TABLE `test`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(90) NULL,
  `permission_id` INT NULL,
  PRIMARY KEY (`id`));
