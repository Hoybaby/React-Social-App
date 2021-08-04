const jwt = require('jsonwebtoken');
// this secret will varify the token because we used it like this
const {SECRET_KEY} = require('../config')

module.exports = (context) => {
    // context
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        // working with tokens, we send it with Bearer 'xxxx'
    }
}