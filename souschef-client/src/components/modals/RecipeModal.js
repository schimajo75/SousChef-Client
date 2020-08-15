import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'
import AddRecipeModal from './AddRecipeModal'

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
            <Modal.Title>{this.props.activeUser.name}'s Recipes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.activeUser.recipes ? this.props.activeUser.recipes.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0).map(recipe => 
              <Div key={recipe.id}><Link to="#" onClick={() => this.handleOpen(recipe.id)}>{recipe.name}</Link></Div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary"><AddRecipeModal 
                activeUser={this.props.activeUser} 
                recipes={this.props.recipes}
                postRecipe={this.props.postRecipe} 
                /></Button>
                <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }   
 }

export default RecipeModal