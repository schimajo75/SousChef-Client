import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import RecipeModal from '../components/modals/RecipeModal'
import RecipeCard from '../components/RecipeCard'
import Notes from '../components/Notes'

const Li = styled.li`
  padding: 1rem;
`;

class Dashboard extends React.Component {

  state = {
    activeRecipe: null
  }
  

render(){
  return (
        <Container>
          <Row>
            <Col className="timer-container">
              <h4>Timer Container</h4>
            </Col>
          </Row>
          <Row className="main-row">
            <Col lg={2} className="resource-container">
              <h3>Resource Bar</h3>
              <ul>
                <Li> <RecipeModal 
                // recipes={this.props.recipes} 
                users={this.props.users} 
                openRecipe={this.props.openRecipe} 
                currentUser={this.props.currentUser} 
                /> </Li>
                <Li>+ Timer</Li>
                <Li>Measurement Converter</Li>
                <Li>Ingredient Replacement</Li>
                <Li>Wine Pairing</Li>
                <Li>Entertainment</Li>
              </ul>
            </Col>
            <Col lg={7} className="active-recipe">
              <RecipeCard activeRecipe={this.props.activeRecipe} users={this.props.users}/>
            </Col>
            <Col lg={3} className="notes-container">
              <Notes 
              activeRecipe={this.props.activeRecipe} 
              currentUser={this.props.currentUser} 
              users={this.props.users}
              newNote={this.props.newNote}/>
            </Col>
          </Row>
        </Container>
    )
}
    
}

export default Dashboard;