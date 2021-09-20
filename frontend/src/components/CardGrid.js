import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { config } from '../App';
import Card from './Card';


export default class CardGrid extends React.Component {

    constructor(props) {
        super(props);
        this.product = [];
        this.state = {
            product: []
        }
    }

    apiCall = async () => {
        let response = await (await fetch(config.endpoint)).json();
        this.product = response;
        console.log(response);
        this.setState({
            product: [...this.product]
        })
    }

    componentDidMount() {
        this.apiCall()
    };

    render() {
        console.log(this.state.product);
        return (
            <>
                <Container style={{ display: 'flex' }} >
                    <Row>
                        {this.state.product.length ? this.state.product.map((item) => <Card item={item} />) : false}
                    </Row>
                </Container>
            </>
        )
    }
}