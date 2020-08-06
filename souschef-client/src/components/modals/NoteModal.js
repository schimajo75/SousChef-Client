import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'

const Div = styled.div`
  padding: 1rem;
`;

class NoteModal extends React.Component {

  state = {
    show: false,
  }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    openRecipe = () => {
      console.log("OPEN RECIPE")
    }
  
    render() {
      return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Note
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
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

export default NoteModal