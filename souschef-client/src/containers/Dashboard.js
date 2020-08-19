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

const Li = styled.p`
  padding: 1rem;
`;

class Dashboard extends React.Component {
  

render(){
  return (
    <>
    <img src="https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="bg" alt="curring board"></img>
        <Container className="dashboard">
          <Row>
            <Col className="timer-container">
              <TimerContainer/>
            </Col>
          </Row>
          <Row className="main-row">
            <Col lg={2} className="resource-container">
              {/* <h3 id="resource-header">Resource Bar</h3> */}
                <Li> <RecipeModal  
                activeUser={this.props.activeUser}
                recipes={this.props.recipes}
                openRecipe={this.props.openRecipe}
                postRecipe={this.props.postRecipe}
                /> </Li>
                <Li><Link to="/create"><Button variant="outline-danger">Create New Recipe</Button></Link></Li>
                <Li> <MeasConvModal /> </Li>
                <Li> <IngSubModal/> </Li>
                <Li> <WineModal 
                recipes={this.props.recipes} 
                activeRecipe={this.props.activeRecipe}
                activeUser={this.props.activeUser}
                /> </Li>
                {/* <Li><a href="https://www.seamless.com/"><Button variant="danger">S.O.S.</Button></a></Li> */}

                {this.props.activeUser ? <Li><a href="http://localhost:3001/"><Button onClick={this.props.logout} variant="outline-danger">Logout</Button></a></Li>
                : null}
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
        </>
    )
}
    
}

export default Dashboard;