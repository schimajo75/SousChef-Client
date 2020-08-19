import React from 'react';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';

// import styled from 'styled-components';

// const Div = styled.div`
//   padding: 1rem;
// `;

class CreateRecipe extends React.Component {

  state = {
    name: "",
    image: "",
    ingredients: [],
    directions: "",
    }
  

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleNameImg = () => {
      this.props.createRecipe(this.state.name, this.state.image)
    }

    handleSelect = (e) => {
      console.log(e.target)
    }


    render() {
      console.log(this.state.ingredients)
      return (
        <>
        <Container>
          <Form>
            <Row>
            <Col>
              <Form.Control placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
            </Col>
            <Col>
              <Form.Control placeholder="image" name="image" value={this.state.image} onChange={this.handleChange}/>
            </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control as="select" onSelect={this.handleSelect} value={this.state.ingredients}>
                    {this.props.ingredients.map(ing => 
                    <option key={ing.id}>{ing.name}</option>)}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Col>
            </Row>
            <Button>Submit</Button>
          </Form>
        </Container>
          
        </>
      )
    }
  }

    export default CreateRecipe