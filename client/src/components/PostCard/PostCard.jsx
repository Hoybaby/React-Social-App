import React from 'react';
import { Card, Icon, Label, Image,  } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import {Link} from 'react-router-dom';
import moment from 'moment';

import 'semantic-ui-css/semantic.min.css';

function PostCard({ 
    post: { body, createdAt, id, username, likeCount, commentCount, likes } 
}) {
    function likePost() {
        console.log('Like Post')
    }

    function likeComment() {
        console.log('Like Comment')
    }


    return (
        <div>
            <Card fluid>
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Card.Header>{username}</Card.Header>
            <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
            <Card.Description>
                {body}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {/* buttons go here
            <button>Testing</button> */}
        <Button as='div' labelPosition='right' onClick={likePost}>
            <Button color='red' basic>
                <Icon name='heart' />
                Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
                {likeCount}
            </Label>
        </Button>
        <Button as='div' labelPosition='right' as={Link} to={`/posts/${id}`}>
            <Button color='blue' basic>
                <Icon name='comments' />
                Like
            </Button>
            <Label as='a' basic color='blue' pointing='left'>
                {commentCount}
            </Label>
        </Button>
            
        
        </Card.Content>
    </Card>
    
        </div>
        
    )
}

export default PostCard;