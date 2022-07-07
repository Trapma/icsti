import React from 'react'
import { Card } from 'react-bootstrap'

const CardItem = (props) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.post.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.post.body}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}

export default CardItem
