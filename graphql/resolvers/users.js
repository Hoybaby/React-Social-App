const User = require("../../models/User");
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../../config');

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
            password = await bcrypt.hash(password,12);

            // user object
            const newUser = new User({
                email,
                username,
                password,
                // the method toISOSString is to convert the date to a string
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save()

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
                // going to input my secret key below which i deconstructed from the config file. it is going into config file to hide sensitive information from github
            },SECRET_KEY, {expiresIn: '1h'});
            return {
                ...res._doc,
                id: res._id,
                token
            }
        },
    },
};
