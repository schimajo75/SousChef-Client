import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const RecipeCard = props =>  {


    return (
            <div className="recipe-card">
                {props.recipes.map(recipe => recipe.id === props.activeRecipe ?
                <div key={recipe.id}>
                <Img src={recipe.image} alt={recipe.name}></Img>
                <h3>{recipe.name}</h3>
                {recipe.ingredient.map(ing => 
                  <ul>
                    <li key={ing.id}>{ing}</li>
                  </ul>
                  )}
                  {recipe.step.map(step => 
                    <ul>
                    <li key={step.id}>{step}</li>
                    </ul>
                    )}
                </div>
                : null
                )}
            </div>
        )
  
    
}

export default RecipeCard;