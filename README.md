# ChemEventz - Angular
&nbsp;
## About ChemEventz!

ChemEventz is a web application that tracks chemical events around the world. 
ChemEventz has been designed to be a collaborative platform to facilitate meetings between researchers, professors, students or anyone interested in these events.

How to make these meetings easier?
  - ChemEventz lists recent events of the most popular events sites
  - Allows users of the platform to add the next known events
  - ChemEventz may allow you to find your future collaborator, job or internship during these meetings


ChemEventz is divided into 5 parts available in my Github account  [public repositories][Git]
  - [ChemEventz - Scraper][GitScrap]  
  - [ChemEventz - NodeJS - API][GitNodeJS] 
  - [ChemEventz - Spring Boot Microservice Authentication][GitSpringAuth]
  - [ChemEventz - Spring Boot Microservice Events][GitSpringEvents]
  - [ChemEventz - Angular][GitAngular]

  
### Tech Dev

ChemEventz uses a number of open source projects to work properly:

* [Angular] - HTML enhanced for web apps!
* [node.js] - v12 for the backend
* [Express] - fast node.js network app framework 
* [Spring Boot] - focus on application-level business logic
* [MongoDB] - non-relationnal database for events storage
* [MySQL] - relational dataBase for users data storage

### Tech Prod

Technologies used to deploy ChemEvents project:

* [Heroku] - Deploy Spring and NodeJS microservices
* [AWS S3] - Deploy Angular microservice
* [AWS RDS] - Cloud MYSQL database Hosting
* [Mongo Atlas] - Cloud MongoDB database Hosting

&nbsp;
______________________________________
&nbsp;

# ChemEventz - Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.


# ChemEvents_Front_Angular_Security

### Tech Dev


* [Angular] - version 9 
* [Bootstrap] - ngx-bootstrap to make responsive application



### Installation

ChemEventz requires Angular 9


```sh
$ git clone https://github.com/nawelb/ChemEvents_Front_Angular_Security.git
$ cd ChemEvents_Front_Angular_Security
```
Import the project in your favorite IDE :

Add environnement variables :
 - `baseUrl` (in `login.service.ts`) : as url of your Spring login microservice [cf Spring Security]
 - `baseUrl` (in `Authentication.service.ts`) : as url of your Spring login microservice [cf Spring Security]
 - `baseUrl` (in `event.service.ts`) : as url of your Spring event microservice [cf Spring Events]


## Build
In the root directory, run: 
```sh
$ ng build
```
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Run
In the root directory, for a dev server, run: 
```sh
$ ng serve -o
```
Finaly,  Navigate to `http://localhost:4200/`, The app will automatically reload if you change any of the source files.






[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

  [Maven]: <https://maven.apache.org/>
  [Java]:<https://www.java.com/fr/download/>
  [Git]: <https://github.com/nawelb>
  [node.js]: <http://nodejs.org>
  [express]: <http://expressjs.com>
  [Angular]: <https://angular.io>
  [Heroku]: <https://heroku.com>
  [Bootstrap]: <https://getbootstrap.com/>
  [Spring Boot]: <https://spring.io/projects/spring-boot>
  [Spring Security]: <https://spring.io/guides/topicals/spring-security-architecture>
  [JWT]: <https://jwt.io/introduction/>
  [GitAngular]: <https://github.com/nawelb/ChemEvents_Front_Angular_Security>
  [GitSpringEvents]: <https://github.com/nawelb/ChemEvents_Back_Spring_Events>
  [cf Spring Events]: <https://github.com/nawelb/ChemEvents_Back_Spring_Events>
  [GitSpringAuth]: <https://github.com/nawelb/ChemEvents_Back_Spring_Security>
  [cf Spring Security]: <https://github.com/nawelb/ChemEvents_Back_Spring_Security>
  [GitNodeJS]: <https://github.com/nawelb/ChemEvents_Back_NodeJS>
  [cf node API]: <https://github.com/nawelb/ChemEvents_Back_NodeJS>
  [GitScrap]: <https://github.com/nawelb/ChemEvents_Scraper>
  [cf scraping project]: <https://github.com/nawelb/ChemEvents_Scraper>
  [AWS S3]: <https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html>
  [AWS RDS]: <https://aws.amazon.com/fr/rds/>
  [Mongo Atlas]: <https://www.mongodb.com/cloud/atlas>
  [MongoDB]: <https://www.mongodb.com/fr>
  [MySQL]: <https://www.mysql.com/fr/>
 [Postman]: <https://www.postman.com/>