import React from "react";
import { Card, Col } from "react-bootstrap";
import { config } from "../App";




export default function Cards(props) {


    return (

        <Col lg={3}>
            <a href={`/items/${props.item._id}`} >
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={props.item.image} />
                    <Card.Body>
                        <Card.Title>{props.item.brand}</Card.Title>
                        <Card.Text>
                            {props.item.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    );

}

