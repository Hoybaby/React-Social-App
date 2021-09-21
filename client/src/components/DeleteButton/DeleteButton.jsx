import React, {useState} from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks';

import {Button, Confirm, Icon} from 'semantic-ui-react';
import {FETCH_POSTS_QUERY} from '../../util/graphql';

function DeleteButton({postId, callback}) {

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        update(cache) {
            // once we reach the update, we have confirmed the modal
            setConfirmOpen(false)
            // have to remove post from cache
            const data = cache.readQuery({
                query: FETCH_POSTS_QUERY,
            });
            data.getPosts = data.getPosts.filter(p=> p.id !== postId);
            cache.writeQuery({ query: FETCH_POSTS_QUERY, data})
            // we might not always havea a callback so this if check makes sure everything works fine
            if(callback) callback();
        },
        variables: {
            postId
        }
    });


    return (
        <div>
            <Button as="div" 
            color="red" 
            floated="right"
            onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style ={{margin: 0}}/>
            </Button>
            <Confirm
                open={confirmOpen}
                onCancel={()=> setConfirmOpen(false)}
                onConfirm={deletePost}
            />
        </div>
        

    )
    
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`
export default DeleteButton;