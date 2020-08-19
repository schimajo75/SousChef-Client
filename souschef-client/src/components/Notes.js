import React from 'react';
import NoteModal from './modals/NoteModal';
import {  Row, Col, Button } from 'react-bootstrap'

const Notes = props =>  {

  return(
    <div>
      {props.activeUser.recipe_lists ? props.activeUser.recipe_lists.map(list =>
        list.recipe_id === props.activeRecipe.id ?
          list.notes.map(note =>
            <div>
              <Row>
                <Col>
                <p>{(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
                </Col>
                <Col>
                <Button variant="outline-secondary" size="sm" onClick={() => props.deleteNote(note.id)}>
                X
                </Button>
                </Col>
              </Row>
            <Row>
              <Col className="noteEntry">
                <p key={note.id}>{note.entry}</p>
              </Col>
            </Row>
         </div>
            ) : null
       
  ) 
       : null}
        <NoteModal newNote={props.newNote}/>
    </div>
  )
}

export default Notes

