# star-wars-api-microservices

This project has been created to implement a basic microservices platform.

Following the microservices architecture, provides the functionality to create, find, update or delete information about characters, planets and films from the StarWars saga.

It's developed based on ExpressJS Framework, implements a MongoDB as persistent information platform and Mongoose as ORM to send and retrieve the information from/to database.

This projects is conformed by 5 standalone aplication interconected via HTTPRequests:

Gateway as entry point
Characters, Films and Planets all CRUD ready services that manages the data manipulation, only accesibles from the gateway
Database is the service that manages the connection, sending and retrieve data from/to the database

This project is containerized by using Docker Compose. To run this project you must fork the repo, and locally run docker-compose up
