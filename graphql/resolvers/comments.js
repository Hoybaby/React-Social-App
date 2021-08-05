const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const {UserInputError} = require('apollo-server')

module.exports - {
    Mutation: {
        createComment: async(_, {postId, body}, context) => {
            // this will check if the user is logged in
            const {username} = checkAuth(context)
            if(body.trim() === '') {
                throw new UserInputError('Empty Comment', {
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                })
            }

            const post = await post.findById(postId);
            if(post) {
                // mongoose turns our data into a json models into json objects.
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOSString()
                })
                await post.save();
                return post;
            
                // this is checking if post is not true, it will read this as typical logic suggests
            } else throw new UserInputError('Post not found')
        }
    }
}