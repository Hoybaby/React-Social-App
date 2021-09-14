import { values } from 'lodash';
import React from 'react'
import {Form, Button} from 'semantic-ui-react';
import gql from 'graphql-tag'

import {useForm} from '../../util/hooks';

function PostForm() {

    // this is pulling the already established features i created in the useForm from the hooks.
    const {values, onChange, onSubmit} = useForm(createPostCallback, {
        
        body: ''
    })

    return (
        <Form onSubmit={onSubmit}>
            <h2>Create a Post: </h2>
            <Form.Field>
                <Form.Input 
                    placeholder="Hi World!"
                    name="body"
                    onChange={onChange}
                    value={values.body}
                    />
                <Button type="submit" color="teal">Submit</Button>

            </Form.Field>
        </Form>
    )
}

const CREATE_POST_CREATION = gql`
    mutation createPost ($body: String!){
        createPost(body: $body){
            id
            body
            createdAt
            username
            likes {
                id
                username
                createdAt
            }
            likeCount
            comments {
                id
                body
                username
                createdAt
            }
            commentCount
        }
    }
`




export default PostForm