import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import RecipeModal from '../components/modals/RecipeModal'
import WineModal from '../components/modals/WineModal'
import RecipeCard from '../components/RecipeCard'
import Notes from '../components/Notes'
import TimerContainer from './TimerContainer'

const Li = styled.li`
  padding: 1rem;
`;

class Dashboard extends React.Component {
  

render(){
  return (
        <Container>
          <Row>
            <Col className="timer-container">
              <TimerContainer/>
            </Col>
          </Row>
          <Row className="main-row">
            <Col lg={2} className="resource-container">
              <h3>Resource Bar</h3>
              <ul>
                <Li> <RecipeModal 
                users={this.props.users} 
                recipes={this.props.recipes}
                openRecipe={this.props.openRecipe}
                postRecipe={this.props.postRecipe}
                /> </Li>
                <Li>+ Timer</Li>
                <Li>Measurement Converter</Li>
                <Li>Ingredient Replacement</Li>
                <Li> <WineModal 
                recipes={this.props.recipes} 
                users={this.props.users}
                /> </Li>
                <Li>Entertainment</Li>
              </ul>
            </Col>
            <Col lg={7} className="active-recipe">
              <RecipeCard 
              activeRecipe={this.props.activeRecipe} 
              recipeIngredients={this.props.recipeIngredients}
              />
            </Col>
            <Col lg={3} className="notes-container">
              <Notes 
              activeRecipe={this.props.activeRecipe} 
              newNote={this.props.newNote}/>
            </Col>
          </Row>
        </Container>
    )
}
    
}

export default Dashboard;