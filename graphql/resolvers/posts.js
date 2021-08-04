const Post = require('../../models/Post')
const checkAuth = require('../../utils/check-auth')
const { AuthenticationError } = require('apollo-server');


module.exports = {
    Query: {
        async getPosts(){
            // maybe your quiery never fails but if it does, it may stop your server so doing a try is nice
            try {
                const posts = await Post.find().sort({createdAt: -1});
                return posts;
            } catch {
                throw new Error(err);
            }
        },
        async getPost(_, {postId}) {
            try {
                const post= await Post.findById(postId);
                if(post) {
                    return post;

                } else {
                    throw new Error('Post not found')
                }
            } catch(err) {
                throw new Error(err)
            }
        }
    },

    Mutation: {
        // users will log in, get the token.
        // in the context arugment, we are using destructuring to get the headers to tell if the user is authenicated.
        async createPost(_, { body}, context) {
            // if there is any errors, it would occur in the check-auth.js
            const user = checkAuth(context)
            console.log(user)

            const newPost = new Post({
                body,
                // user from Post model, we gave it a user and an ID
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()

            });

            const post = await newPost.save();

            return post;

        },
        async deletePost(_, {postId}, context) {
            const user = checkAuth(context);
            
            try {
                const post = await Post.findById(postId);
                    if(user.username === post.username) {
                        await post.delete();
                        return 'Post deleted succesfully'
                    } else {
                        throw new AuthenticationError('Action not allowed');
                    }
            } catch(err) {
                throw new Error(err)
            }

        }
    }
}