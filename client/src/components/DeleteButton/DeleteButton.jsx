import React, {useState} from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks';

import {Button, Confirm, Icon} from 'semantic-ui-react';

function DeleteButton() {

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        update() {
            // once we reach the update, we have confirmed the modal
            setConfirmOpen(false);
            // have to remove post from cache
        }
        variables: {
            postId
        }
    });


    return (
        <div>
            <Button as="div" 
            color="red" 
            onClick={() => console.log('Delete Post')}
            floated="right"
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
    mutation deletePost($postId;Id!) {
        deletePost($postId: postId)
    }



`
export default DeleteButton;