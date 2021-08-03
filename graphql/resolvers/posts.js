const Post = require('../../models/Post')


module.exports = {
    Query: {
        async getPosts(){
            // maybe your quiery never fails but if it does, it may stop your server so doing a try is nice
            try {
                const posts = await Post.find();
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
    }
}