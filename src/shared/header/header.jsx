import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'react-grid-system';


const Header = () => {
    return (
        <Container className="header">
            <Row>
                <Col sm={6}>
                One of three columns
                </Col>
                <Col sm={6}>
                One of three columns
                </Col>
            </Row>
        </Container>
     );
}

export default Header;
