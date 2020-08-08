import React from 'react';
import NoteModal from './modals/NoteModal';

const Notes = props =>  {

  return(
    <div>
      {props.users.notes ? props.users.notes.map(note => 
          note.recipe_id === props.activeRecipe ?
              <>
              <p>{(new Date().getMonth()+1)+'-'+new Date().getDate()+'-'+new Date().getFullYear()}</p>
              <p key={note.id}>{note.entry}</p>
              </>
               :
              null
      ) : null}
        <NoteModal newNote={props.newNote}/>
    </div>
  )
}

export default Notes

