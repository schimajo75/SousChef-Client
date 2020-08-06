import React from 'react';

class RecipeCard extends React.Component {

  state = {
    ingredients: [],
    steps: [],
    title: ''
  }

  render(){
    return (
            <div className="recipe-card">
                Recipe
            </div>
        )
  }
    
}

export default RecipeCard;