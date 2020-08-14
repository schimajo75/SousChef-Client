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
          <p>{(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
            <Row>
              <Col>
                <p key={note.id}>{note.entry}</p>
              </Col>
              <Col>
                <Button variant="secondary" size="sm" onClick={() => props.deleteNote(note.id)}>
                X
                </Button>
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

