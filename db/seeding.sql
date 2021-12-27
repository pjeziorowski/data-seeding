DROP TABLE IF EXISTS USER
CREATE TABLE USER(ID INT PRIMARY KEY NOT NULL,
                                     FIRST_NAME VARCHAR(255) NOT NULL,
                                                             LAST_NAME VARCHAR(50) NOT NULL,);


INSERT INTO USER (FIRST_NAME,
                  LAST_NAME)
VALUES ('John',
        'Doe');


INSERT INTO USER (FIRST_NAME,
                  LAST_NAME)
VALUES ('Alice',
        'Wonderland')