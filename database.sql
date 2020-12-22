CREATE DATABASE clockin_project;

CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    contact_name VARCHAR(100),
    company_phone INT,
    company_address VARCHAR(100),
    company_mail VARCHAR(100)
);

CREATE TABLE project(
    project_id SERIAL PRIMARY KEY,
    project_company_name VARCHAR(100),
    project_description VARCHAR(100),
    project_location VARCHAR(100),
    project_time INT,
    project_timeStamp TIMESTAMP DEFAULT NOW()
);

/*
command til að tengja database við heroku server

heroku pg:psql <FULL_DATABASE_NAME> --app <APPLICATION_NAME>

í þessu tilfelli þá gildir

heroku pg:psql <FULL_DATABASE_NAME> --app final-project 



Fyrstu skrefin í að setja inn töflu og bæta við gögnum

    CREATE TABLE project(
    project_id SERIAL PRIMARY KEY,
    clock_in TIMESTAMP DEFAULT NOW(),
    total_time INT,
    project_company_name VARCHAR(100),
    project_description VARCHAR(100),
    project_location VARCHAR(100)
    );

    svo bæta við lista company

    CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    contact_name VARCHAR(100),
    company_phone INT,
    company_address VARCHAR(100),
    company_mail VARCHAR(100)
    );

Bæta við gögn í töflu

    my-newserver::DATABASE=> INSERT INTO todo (company, description) values ('Raðgjafafyrirtæki Rafnars', 'Sql ráðgjöf');
    my-newserver::DATABASE=> SELECT * FROM todo;
    todo_id |          clock_in          |          company          | description
    ---------+----------------------------+---------------------------+-------------
          1 | 2020-12-16 12:51:38.511696 | Radgjafafyrirtæki Rafnars | Sql rádgjöf

Eyða gögn í töflu
    my-newserver::DATABASE=> DELETE FROM todo where todo_id=1;



    til að passa sig á því að eyða ekki eða breyta gögnum í töflu þá er hægt að nota

    BEGIN TRANSACTION;
    ....
    DELETE,
    INSERT,
    ....
    ROLLBACK;           - Kallar skipanirnar til baka sem gætu hafa eyðilagt töfluna (bara það sem átti sér stað eftir BEGIN TRANSACTION)
    COMMIT;             - Vistar það sem þú varst að gera
*/