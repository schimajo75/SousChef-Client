import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'

const Div = styled.div`
  padding: 1rem;
`;

class IngSubModal extends React.Component {

  state = {
    show: false,
    replacement: {}
  }

    handleClose = () => this.setState({show: false, replacement: {}});
    handleShow = () => {
      this.setState({show: true});
    }

    handleChange= (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
      let ingredient = this.state.replacement
      fetch(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredient}&apiKey=5dae8dcf899b4a1dbf7637f822014ad6`)
      .then(r => r.json())
      .then(ing => {
        console.log(ing)
        this.setState({replacement: ing })
      })
    }

  
    render() {
      return (
      <>
        <Button variant="outline-danger" onClick={this.handleShow}>
          Ingredient Sub
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="ingSubModalTitle">Ingredient Substitution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Ingredient" name="replacement" input={this.state.replacement} onChange={this.handleChange} />
              </Col>
            </Form.Row>
          </Form>
          <Row>
            <Col>
            {!this.state.replacement.substitutes ? null :
              this.state.replacement.substitutes.map(sub => 
              <Div key={sub.id}>{sub}</Div>
              )}
            </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            {this.state.replacement.substitutes ? null : 
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

 export default IngSubModal