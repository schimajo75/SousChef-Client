import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Dashboard = props => {

    return (
        <Container>
          <Row>
          <Col>
            <p>Timer Container</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h1>Resource Bar</h1>
              <ul>
                <li className="resource-list">Recipes</li>
                <li className="resource-list">+ Timer</li>
                <li>Measurement Converter</li>
                <li>INgredient Replacement</li>
                <li>Wine Pairing</li>
                <li>Entertainment</li>
              </ul>
            </Col>
            <Col lg={7}>Active Recipe</Col>
            <Col lg={3}>Notes</Col>
          </Row>
        </Container>
    )
}

export default Dashboard;