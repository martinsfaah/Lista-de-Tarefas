CREATE DATABASE  IF NOT EXISTS `TAREFA_DB` ;
USE `TAREFA_DB`;

DROP TABLE IF EXISTS `tarefa`;

CREATE TABLE `tarefa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(50) NOT NULL DEFAULT "pendente",
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tarefa (descricao) VALUES ("Nova tarefa");