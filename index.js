const { ApolloServer} = require('apollo-server');


const gql = require('graphql-tag');

// Database connection
const mongoose = require('mongoose');

// Schemas

const Post = require('./models/Post')

//  in this variable, we will write the typed ql types
const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    getPosts: [Post]
`

// resolvers do is that for each quiery, mutation, subscription, it has it corresponding resolver
// if we have a query of sayHi, it needs a resolver of sayHi
const resolvers = {
    Query: {
        sayHi: () => 'hello world!!!!!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers

});

// connection to database
const {MONGODB} = require('./config.js')

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => {
        console.log('MONGODB is connected')
        return server.listen({ port: 5000})
    }).then(res => {
        console.log(`server running at ${res.url}`)
})
