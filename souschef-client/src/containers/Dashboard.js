import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import RecipeModal from '../components/RecipeModal'
import RecipeCard from '../components/RecipeCard'

const Li = styled.li`
  padding: 1rem;
`;

class Dashboard extends React.Component {

  state = {
    activeRecipe: null
  }
  

render(){
  // console.log(this.state)
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
                <Li> <RecipeModal recipes={this.props.recipes} openRecipe={this.props.openRecipe}/> </Li>
                <Li>+ Timer</Li>
                <Li>Measurement Converter</Li>
                <Li>Ingredient Replacement</Li>
                <Li>Wine Pairing</Li>
                <Li>Entertainment</Li>
              </ul>
            </Col>
            <Col lg={7} className="active-recipe">
              <RecipeCard activeRecipe={this.props.activeRecipe} recipes={this.props.recipes}/>
              </Col>
            <Col lg={3} className="notes-container">
              <h3>Notes</h3>
              </Col>
          </Row>
        </Container>
    )
}
    
}

export default Dashboard;