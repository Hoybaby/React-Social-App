#React-Social-App

## Description
Individuals must register an account to write posts and comments onto the application. The user creates an account that has a JWToken which verifies the information and stored in the localStorage. All of this information gets stored in a MONGO Database.

## Table of Contents

* [Installation](#installation)

* [License](#license)

* [Process](#process)

* [Tests](#tests)

* [Contributors](#contributors)

* [Contact](#contact)


## Installation
Packages required to run this program are split between front end and back end. For the server side of this application, these pacakges were installed: mongoose, jsonwebtoken, graphql, bcryptjs, apollo-server. 

For the Front-End: @apollo/react-hooks apollo-cache-inmemory apollo-client apollo-client apollo-link-context apollo-link-http graphql graphql-tag jwt-decode moment react react-router-dom semantic-ui-css semantic-ui-react. 

For all of these packages, I installed them simply with npm i (then the pacakage I wanted). 



## Process

<h3> GraphQl/Back-End</h3>

<p>The first thing to I wanted to set up was my database because all the posts, users and comments will have to be stored on a particular source. For that source, I used MONGODB and GraphQL to query the information into the database. This was my first time working with GraphQL and I have a much better understanding what it is. In order to protect my database, I made a seperate file that would handle the connection of the database which is very important for application security. For each query or mutation, there has to be a corresponding resolver with GraphQL and ned to import Apollo Server. Since MOGODB is my perfered databsae for this project, it is important to important Mongoose into the server file which allows us to interface with the database. MONGODB is schema-less but having a schema can make it more safe to work with which I used and only created two schemas.</p>

<p>After the initial setup with the database, I wanted to create the mutations and typedDefs that graphQl will need in order to create and register users for indidivuals. The typedDefs file will tell the database what information to expect and how to receiev it from the resolvers. The resolvers will handle all the verification, text input from users to make sure that post bodys or username's aren't empty and send an error to the page. Since we have to wait for information to be populated, with the use of async functions, the logic for the resolvers were made.</p>

<p>Most of the logic that will handle the verification and errors of posts, registration and sign in will be done by GraphQL. How the creation of the post, the user will log in, recieve a token and put this token into an Authorization Header which is done from having `context` equal to request from the express side. This will then put the token into the proper authorization which will show that it is valid.  </p>


## Deployable Link
<!-- Link to live program: https://hoybaby.github.io/React-Social-App -->

I have yet to have the deployable link through heroku and netifly. It will come soon




## License
The license that is being used is MIT. Can be found in the license folder.




## Tests
To test, run the following command: None




## Contributors
Michael Bartek.


## Contact

My GitHub is Hoybaby and my name is Michael Bartek.

If you have any questions, contact the author directly at mbartek436@gmail.com.
