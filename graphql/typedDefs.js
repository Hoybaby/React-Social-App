const { gql } = require('apollo-server');

module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    # this is an input which is a difffernt kind of type which is given to the resolver
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    # in order to make users log in need to make a mutation
    type Mutation {
        # this is handlded in the users.js part
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!) : User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
    }
    
`