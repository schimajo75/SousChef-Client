import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

class RecipeCard extends React.Component {

  // let { id, name, image, ingredient, step} = this.props

  state = {
    ingredients: [],
    steps: [],
    title: ''
  }

  render(){
    return (
            <div className="recipe-card">
                {this.props.recipes.map(recipe => recipe.id === this.props.activeRecipe ?
                <>
                <Img src={recipe.image} alt={recipe.name}></Img>
                <h3>{recipe.name}</h3>
                {recipe.ingredient.map(ing => 
                  <ul>
                    <li>{ing}</li>
                  </ul>
                  )}
                  {recipe.step.map(step => 
                    <ul>
                    <li>{step}</li>
                    </ul>
                    )}
                </>
                : null
                )}
            </div>
        )
  }
    
}

export default RecipeCard;