DROP TABLE IF EXISTS _USER;


CREATE TABLE _USER(ID INT PRIMARY KEY NOT NULL,
                                      FIRST_NAME VARCHAR(255) NOT NULL,
                                                              LAST_NAME VARCHAR(50) NOT NULL);


INSERT INTO _USER (ID, FIRST_NAME, LAST_NAME)
VALUES (1,
        'John',
        'Doe');


INSERT INTO _USER (ID, FIRST_NAME, LAST_NAME)
VALUES (2,
        'Alice',
        'Wonderland');