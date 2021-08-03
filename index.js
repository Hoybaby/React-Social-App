const { ApolloServer} = require('apollo-server');

// Database connection
const mongoose = require('mongoose');

// typedDefs needed for GraphQL and Resolvers for the trypedDefs
const typeDefs = require('./graphql/typedDefs')
const resolvers = require('./graphql/resolvers');

// connection to database
const {MONGODB} = require('./config.js')

// what do resolvers do? For each quiery, mutation, subscription, it has it corresponding resolver
// if we have a query of sayHi, it needs a resolver of sayHi

const server = new ApolloServer({
    typeDefs,
    resolvers

});



mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => {
        console.log('MONGODB is connected')
        return server.listen({ port: 5000})
    }).then(res => {
        console.log(`server running at ${res.url}`)
})
