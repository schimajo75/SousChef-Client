import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const RecipeCard = props =>  {


    return (
      <div>
        {props.users.recipes ? props.users.recipes.map(recipe => 
            recipe.id === props.activeRecipe ? 
          <div key={recipe.id}>
            <Img src={recipe.image} alt={recipe.name}></Img>
            <h3>{recipe.name}</h3>
            {recipe.ingredient.map(ing => 
              <p key={ing.id}>{ing}</p>
              )}
              {recipe.step.map(step => 
                <p key={step.id}>{step}</p>)}
          </div> :
          null
          ) : null}
      </div>
    )
  }

  // <div>
  //       {props.users.map(user => 
  //         user.recipes.map(recipe =>
  //           recipe.id === props.activeRecipe ? 
  //         <div key={recipe.id}>
  //           <Img src={recipe.image} alt={recipe.name}></Img>
  //           <h3>{recipe.name}</h3>
  //           {recipe.ingredient.map(ing => 
  //             <p key={ing.id}>{ing}</p>
  //             )}
  //             {recipe.step.map(step => 
  //               <p key={step.id}>{step}</p>)}
  //         </div> :
  //         null
  //         ))}
  //     </div>
                

export default RecipeCard;
                    