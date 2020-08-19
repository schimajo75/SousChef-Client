import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'

const Div = styled.div`
  padding: 1rem;
`;

class MeasConvModal extends React.Component {

  state = {
    show: false,
    ingredient: "",
    amount: "",
    from: "",
    to: "",
    answer: ""
  }

    handleClose = () => this.setState({show: false, answer: ""});
    handleShow = () => {
      this.setState({show: true});
    }

    handleChange= (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
      let ingredient = this.state.replacement
      let amount = this.state.amount
      let from = this.state.from
      let to = this.state.to
      fetch(`https://api.spoonacular.com/recipes/convert?ingredientName=${ingredient}&sourceAmount=${amount}&sourceUnit=${from}&targetUnit=${to}&apiKey=5dae8dcf899b4a1dbf7637f822014ad6`)
      .then(r => r.json())
      .then(res => {
        console.log(res.answer)
        this.setState({answer: res.answer})
      })
    }

  
    render() {
      console.log(this.state.answer)
      return (
      <>
        <Button variant="outline-danger" onClick={this.handleShow}>
          Conversion
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="convModalTitle">Measurement Conversion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Ingredient" name="ingredient" input={this.state.replacement} onChange={this.handleChange} />
              </Col>
              <Col>
                <Form.Control placeholder="Amount" name="amount" input={this.state.replacement} onChange={this.handleChange} />
              </Col>
              <Col>
                <Form.Control placeholder="Unit" name="from" input={this.state.replacement} onChange={this.handleChange} />
              </Col>
              <Col>
                <Form.Control placeholder="Convert to" name="to" input={this.state.replacement} onChange={this.handleChange} />
              </Col>
            </Form.Row>
          </Form>
          <Row>
            <Col>
            {this.state.answer ? 
              <Div >{this.state.answer}</Div>
              : null}
            </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            {this.state.answer ? null : 
            <Button variant="primary" onClick={this.handleSubmit}>
            Submit
            </Button>
            }
          </Modal.Footer>
        </Modal>
      </>
    );
  }   
 }

 export default MeasConvModal