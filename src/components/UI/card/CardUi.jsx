import React from 'react'
import { Card } from 'react-bootstrap'

export const CardUi = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title> Заголовок статьи</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid voluptatibus dignissimos fugiat suscipit quasi eum quidem odit, perferendis expedita at ad veritatis ipsam earum quisquam quod tempora delectus praesentium?
                </Card.Text>
            </Card.Body>

        </Card>
    )
}
