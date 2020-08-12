import React from 'react';
import NoteModal from './modals/NoteModal';
import {  Row, Col, Button } from 'react-bootstrap'

const Notes = props =>  {

  return(
    <div>
      {props.activeRecipe.recipe_lists ? props.activeRecipe.recipe_lists[0].notes.map(note => 
        <>
          <p>{(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
            <Row>
              <Col>
                <p key={note.id}>{note.entry}</p>
              </Col>
              <Col>
                <Button variant="secondary" size="sm">
                X
                </Button>
              </Col>
            </Row>
         </>
      ) : null}
        <NoteModal newNote={props.newNote}/>
    </div>
  )
}

export default Notes

