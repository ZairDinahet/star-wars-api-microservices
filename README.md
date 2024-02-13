# Star Wars API Microservice�🚀

This project has been created to implement a basic microservices platform.

Following the microservices architecture, it provides the functionality to create, find, update, or delete information about StarWars characters, planets, and movies.

It is developed based on the ExpressJS Framework, implements a MongoDB as a persistent information platform and Mongoose as an ORM to send and retrieve information from/to the database.

This project consists of 5 independent applications interconnected via HTTPRequests:

- Gateway as an entry point
- Characters, Movies and Planets all services ready CRUD that manages data manipulation, only accessible from the gateway.
- Database is the service that manages the connection, sending and retrieval of data from/to the database.

This project is containerized using Docker Compose. To run this project you must clone the repository and run docker-compose locally.

## Diagram
![alt text](Diagram.png)


## Endpoints of the Service:
    http://localhost/:8000
    http://localhost/:8000/characters
    http://localhost/:8000/films
    http://localhost/:8000/planets


**Characters:**
- GET /characters Get a list of all the characters.
- GET /characters/:id Get information about a specific character by their ID.
- POST /characters Create a new character by providing the necessary data.
- PUT /characters/:id Updates the information of a specific character by their ID.
- DELETE /characters/:id Delete a character’s information using its ID.


**Films:**
- GET /films: Get a list of all Star Wars movies.
- GET /films/{id}: Get information about a specific film by its ID.
- POST /films: Create a new film by providing the necessary data.
- PUT /fimls/:id Updates the information of a specific film by its ID.
- DELETE /fimls/:id Removes information from a film using its ID.

**Planets:**
- GET /planets Get a list of all Star Wars planets.
- GET /planets/:id Get information about a specific planet by its ID.
- POST /planets Create a new planet by providing the necessary data.
- PUT /planets/:id Updates the information of a specific planet by its ID.
- DELETE /planets/:id Removes information from a planet using its ID.

## Requirements

- Docker installed in your local machine.
- Database in MongoAtlas and credentials.
- Configure MongoAtlas credentials for data storage in the file `.env
    MONGO_URI=MONGODB CLUSTER ROUTE

## Configuration
    git clone https://github.com/ZairDinahet/star-wars-api-microservices
    cd star-wars-api-microservices
    npm i 
    docker-compose build
    docker-compose up
