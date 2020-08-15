import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Div = styled.div`
  padding: 1rem;
`;

class AddRecipeModal extends React.Component {

  state = {
    show: false,
  }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    handleOpen = (rec) => {
      let post = this.props.activeUser.recipes.filter(recipe => recipe.id !== rec.id)
      post.length === this.props.activeUser.recipes.length ? this.props.postRecipe(rec.id, this.props.activeUser.id) : alert("You already have that recipe. Please choose another")
    }

    render() {
      return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Recipe
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.recipes.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0).map(recipe => 
              <Div key={recipe.id}><Link to="#" onClick={() => this.handleOpen(recipe)}>{recipe.name}</Link></Div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }   
 }

export default AddRecipeModal