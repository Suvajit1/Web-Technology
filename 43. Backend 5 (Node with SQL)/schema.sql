-- show tables;

CREATE TABLE IF not EXISTS user(
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    pasword VARCHAR(50) NOT NULL
);

