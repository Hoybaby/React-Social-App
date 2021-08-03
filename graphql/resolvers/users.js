const User = require('../../models/User');

module.exports = {
    Mutation: {
        // inside of the register function, needs to take some input
        // parents give us resaults from the input from last step, in some cases, you can have mutiple resolvers
        // register(parent, args,context, info)
        register(_, args,context, info) {
            // What i need to do: Validate user data,
            // make sure users doesn't already exist
            // hash password before storing it in the database and create an auth token
            
        }
    }
}