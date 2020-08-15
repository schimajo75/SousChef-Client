import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecipeModal from '../components/modals/RecipeModal'
import WineModal from '../components/modals/WineModal'
import IngSubModal from '../components/modals/IngSubModal'
import MeasConvModal from '../components/modals/MeasConvModal'
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
                activeUser={this.props.activeUser}
                recipes={this.props.recipes}
                openRecipe={this.props.openRecipe}
                postRecipe={this.props.postRecipe}
                /> </Li>
                <Li><Link to="/create"><Button>Create New Recipe</Button></Link></Li>
                <Li> <MeasConvModal /> </Li>
                <Li> <IngSubModal/> </Li>
                <Li> <WineModal 
                recipes={this.props.recipes} 
                activeRecipe={this.props.activeRecipe}
                activeUser={this.props.activeUser}
                /> </Li>
                <Li><a href="https://www.seamless.com/"><Button variant="danger">S.O.S.</Button></a></Li>
              </ul>
            </Col>
            <Col lg={7} className="active-recipe">
              <RecipeCard 
              activeRecipe={this.props.activeRecipe}
              activeUser={this.props.activeUser} 
              recipeIngredients={this.props.recipeIngredients}
              />
            </Col>
            <Col lg={3} className="notes-container">
              <Notes 
              activeRecipe={this.props.activeRecipe} 
              activeUser={this.props.activeUser} 
              newNote={this.props.newNote}
              deleteNote={this.props.deleteNote}/>
            </Col>
          </Row>
        </Container>
    )
}
    
}

export default Dashboard;