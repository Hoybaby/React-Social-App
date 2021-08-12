import React from 'react';
import { Card, Icon, Label, Image } from 'semantic-ui-react';
import Moment from 'moment'
import moment from 'moment';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
    <Card>
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Card.Header>{username}</Card.Header>
            <Card.Meta>{moment(createdAt.fromNow())}</Card.Meta>
            <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <p>buttons here</p>
        </Card.Content>
    </Card>
}

export default PostCard;