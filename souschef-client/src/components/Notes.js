import React from 'react';
import NoteModal from './modals/NoteModal';

const Notes = props =>  {

 let entries = []
 props.recipes.map(recipe => recipe.id === props.activeRecipe ?
  recipe.notes.map(note => 
    note.entry.map(entry => entries.push(entry))) : null
  )
  
  

  return(
    <div>
      {entries.map(entry => 
        <ul>
        <li key={entry.id}>{entry}</li>
        </ul>
        )}
        <NoteModal/>
    </div>
  )
}

export default Notes