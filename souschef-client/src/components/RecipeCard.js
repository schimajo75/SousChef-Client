import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const RecipeCard = props => {
  let quantity = props.activeRecipe.recipe_ingredients
    return (
      <div>
          {props.activeRecipe.image ? <Img src={props.activeRecipe.image} alt={props.activeRecipe.name}></Img> : null}
          <h3>{props.activeRecipe.name}</h3>
          {props.activeRecipe.ingredients ? props.activeRecipe.ingredients.map(ing => 
              <p key={ing.id}>{quantity ? quantity.map(q => q.ingredient_id === ing.id ? <p key={q.id}>{q.quantity}:</p>: null): null}{ing.name}</p>
            ) : null}
            {props.activeRecipe.step ? props.activeRecipe.step.map(step => 
              <p key={step.id}>{step}</p>
            ) : null} 
      </div>
    )
  }
                

export default RecipeCard;

                    