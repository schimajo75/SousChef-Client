import React from 'react';
// import styled from 'styled-components';
import { Modal, Button, Form } from 'react-bootstrap'

// const Div = styled.div`
//   padding: 1rem;
// `;

class NoteModal extends React.Component {

  state = {
    show: false,
    text: ""
  }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    // Once a specific user is signed in, HandleSubmitfunction needs to run a Post fetch to Notes associated with user and recipe
    handleSubmit = (note) => {
      this.props.newNote(note)
      this.handleClose()
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
            <Form>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows="3" input={this.state.text} name="text" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" onClick={() => this.handleSubmit(this.state.text)}>Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }   
 }

export default NoteModal