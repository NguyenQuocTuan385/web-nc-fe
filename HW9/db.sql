CREATE TABLE todolist.tasks (
  id BIGINT unsigned auto_increment NOT null,
	title varchar(50) NOT NULL,
	completed BOOL DEFAULT FALSE NULL,
	PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci
AUTO_INCREMENT=1;