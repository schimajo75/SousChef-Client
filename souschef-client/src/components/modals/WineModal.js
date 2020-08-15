import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'

const Div = styled.div`
  padding: 1rem;
`;

class WineModal extends React.Component {

  state = {
    show: false,
    meal: "",
    winePairing: {}
  }

  handleClose = () => this.setState({show: false, replacement: {}});
  handleShow = () => {
    this.setState({show: true});
  }

  handleChange= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    let meal = this.state.meal
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${meal}&apiKey=5dae8dcf899b4a1dbf7637f822014ad6`)
    .then(r => r.json())
    .then(wine => {
      console.log(wine)
      this.setState({winePairing: wine })
    })
  }

  
    render() {
      return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Wine Pairing
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Wine Pairing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Meal" name="meal" input={this.state.meal} onChange={this.handleChange} />
              </Col>
            </Form.Row>
          </Form>
          <Row>
            <Col>
            {!this.state.winePairing.pairedWines ? null :
              this.state.winePairing.pairedWines.map(wine => 
              <Div key={wine.id}>{wine}</Div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Div>{this.state.winePairing.pairingText}</Div>
            </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }   
 }

 export default WineModal