import React from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks';

import {Button, Icon} from 'semantic-ui-react';

function DeleteButton() {

    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        variables: {
            postId
        }
    });


    return (
        <Button as="div" 
                    color="red" 
                    onClick={() => console.log('Delete Post')}
                    floated="right"
                    >
                        <Icon name="trash" style ={{margin: 0}}/>
                    </Button>
    )
    
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId;Id!) {
        deletePost($postId: postId)
    }



`
export default DeleteButton;