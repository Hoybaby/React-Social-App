const { ApolloServer} = require('apollo-server');

const gql = require('graphql-tag');

//  in this variable, we will write the typed ql types
const typedDefs = gql`
    type Query {
        sayHi: String!
    }
`

// resolvers do is that for each quiery, mutation, subscription, it has it corresponding resolver
// if we have a query of sayHi, it needs a resolver of sayHi
const resolvers = {
    Query: {
        sayHi: () => 'hello world'
    }
}

const server = new ApolloServer({
    typedDefs,
    resolvers

});

server.listen({ port: 5000})
    .then(res => {
        console.log(`server running at ${res.url}`)
    })