import React from 'react';
import { Card, Icon, Label, Image,  } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import {Link} from 'react-router-dom';
import moment from 'moment';

import 'semantic-ui-css/semantic.min.css';

function PostCard({ 
    post: { body, createdAt, id, username, likeCount, commentCount, likes } 
}) {
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
        <Button as='div' labelPosition='right'>
            <Button color='red'>
                <Icon name='heart' />
                Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
                {likeCount}
            </Label>
        </Button>
            
        
        </Card.Content>
    </Card>
    
        </div>
        
    )
}

export default PostCard;