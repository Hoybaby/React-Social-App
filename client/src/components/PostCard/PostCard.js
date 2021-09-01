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
        {/* <Button
            color='red'
            content='Like'
            icon='heart'
            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
        /> */}
            
        
        </Card.Content>
    </Card>
    
        </div>
        
    )
}

export default PostCard;