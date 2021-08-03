const User = require("../../models/User");
const bcrypt = require('bcryptjs.')

const jwt = require('jsonwebtoken');

module.exports = {
    Mutation: {
        // inside of the register function, needs to take some input
        // parents give us resaults from the input from last step, in some cases, you can have mutiple resolvers
        // register(parent, args,context, info)
        async register(
            _,
            { registerInput: { username, email, password, confirmPassword } },
            context,
            info
        ) {
            // What i need to do: Validate user data,
            // make sure users doesn't already exist
            // hash password before storing it in the database and create an auth token
            // the args
            // ------------
            // need to hash the password which is synchronous
            password = await
        },
    },
};
