import React from 'react';
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Img = styled.img`
  height: 300px;
  width: 400px;
`;

const RecipeCard = props => {
  let quantity = props.activeRecipe.recipe_ingredients
    return (
      <div>
        <Row>
          <Col className="recImage">
          {props.activeRecipe.image ? <Img src={props.activeRecipe.image} alt={props.activeRecipe.name}></Img> : null}
          <h3 className="recName">{props.activeRecipe.name}</h3>
          </Col>
        </Row>
        <Row className="ing">
          <Col className="ingQuant">
          {props.activeRecipe.ingredients ? props.activeRecipe.ingredients.map(ing => 
              <p key={ing.id}>{quantity ? quantity.map(q => q.ingredient_id === ing.id ? <p key={q.id}>{q.quantity}:</p>: null): null}</p>
            ) : null}
          </Col>
          <Col className="ingName">
          {props.activeRecipe.ingredients ? props.activeRecipe.ingredients.map(ing => 
              <p key={ing.id}>{ing.name}</p>
            ) : null}
          </Col>
          </Row>
          <Row>
            <Col className="recSteps">
          {props.activeRecipe.step ? props.activeRecipe.step.map(step => 
              <p className="step" key={step.id}>{step}</p>
            ) : null} 
          </Col>
          </Row>
      </div>
    )
  }
                

export default RecipeCard;

                    