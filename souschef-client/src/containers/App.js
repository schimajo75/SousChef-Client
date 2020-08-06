import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import RecipeIndex from './RecipeIndex'
import Dashboard from './Dashboard'
import RecipeCard from '../components/RecipeCard'

const recipeAPI = 'http://localhost:3000/api/v1/recipes'


class App extends React.Component {

  state = {
    recipes: []
  }

  componentDidMount() {
    fetch(recipeAPI).then(r => r.json()).then(recipe => this.setState({recipes: recipe }))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/recipes/:id" render={(routerProps) => <RecipeCard {...routerProps} /> } />
          <Route path="/dashboard" render={(routerProps) => <Dashboard {...routerProps} /> } />
          <Route path="/recipes" render={(routerProps) => <RecipeIndex {...routerProps} /> } />
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;