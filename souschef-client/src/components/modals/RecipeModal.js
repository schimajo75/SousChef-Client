import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'

const Div = styled.div`
  padding: 1rem;
`;

class RecipeModal extends React.Component {

  state = {
    show: false,
  }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    handleOpen = (id) => {
      this.handleClose()
      this.props.openRecipe(id)
    }

    openRecipe = () => {
      console.log("OPEN RECIPE")
    }
  
    render() {
      return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          My Recipes
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.currentUser}'s Recipes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.users.recipes ? this.props.users.recipes.map(recipe => 
              <Div key={recipe.id}><Link to="#" onClick={() => this.handleOpen(recipe.id)}>{recipe.name}</Link></Div>
              
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }   
 }

export default RecipeModal