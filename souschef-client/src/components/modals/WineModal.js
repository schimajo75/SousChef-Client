import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'

// const Div = styled.div`
//   padding: 1rem;
// `;

class WineModal extends React.Component {

  state = {
    show: false,
    winePairing: {}
  }

    handleClose = () => this.setState({show: false});
    handleShow = () => {
      this.setState({show: true});
      this.props.activeRecipe ? this.wineFetch(this.props.activeRecipe.name) : alert("please choose a recipe")
    }
    

    wineFetch = (name) => {
      console.log("searching for wine to pair with:", name)
      fetch(`https://api.spoonacular.com/food/wine/pairing?food=${name}&apiKey=5dae8dcf899b4a1dbf7637f822014ad6`)
      .then(r => r.json())
      .then(wine => console.log(wine))
      // .then(wine => this.setState({winePairing: wine }))
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

 export default WineModal