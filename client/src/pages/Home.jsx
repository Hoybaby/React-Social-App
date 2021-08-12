import React from 'react'
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag'

function Home() {
    // from useQuery we get, loading which is true and data. 
    const {loading, data} = useQuery(FETCH_POSTS_QUERY)
    if(data) {
        console.log(data);
    }
    return (
        <div>
            <h1>Home Page</h1>
            
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id 
            body 
            createdAt 
            username 
            likeCount
            likes {
                username
            }
            commentCount
            comments{
                id 
                username 
                createdAt 
                body
            }
        }
    }
`

export default Home;
