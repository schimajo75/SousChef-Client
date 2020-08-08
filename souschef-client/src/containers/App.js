import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import RecipeIndex from './RecipeIndex'
import Dashboard from './Dashboard'
import RecipeCard from '../components/RecipeCard'

// const recipeAPI = 'http://localhost:3000/api/v1/recipes'
const userAPI = 'http://localhost:3000/api/v1/users'
const notesAPI = 'http://localhost:3000/api/v1/notes'

// const listAPI = 'http://localhost:3000/api/v1/recipe_lists'


class App extends React.Component {

  state = {
    // recipes: [],
    users: [],
    // recipeLists: [],
    activeRecipe: null,
    currentUser: "",
    currentUserId: null
  }

  componentDidMount() {
    // need to set a conditional so that only logged in user's recipes are fetched
    // fetch(recipeAPI).then(r => r.json()).then(recipe => this.setState({recipes: recipe }))
    fetch(userAPI).then(r => r.json()).then(user => this.setState({users: user }))
    // fetch(listAPI).then(r => r.json()).then(list => this.setState({recipeLists: list }))
  }

  openRecipe = (id) => {
    this.setState({activeRecipe: id})
  }

  setUser = (id) => {
    //  this.setState({currentUser: id})
     let filtered = this.state.users.filter(user => user.id === id)
     this.setState({users: filtered[0], currentUser: filtered[0]["name"], currentUserId: id})
  }

  newNote = (note) => {
    fetch(notesAPI, {
      method: 'POST',
      body: JSON.stringify({
        entry: note,
        recipe_id: `${this.state.activeRecipe}`,
        user_id: `${this.state.currentUserId}`,
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => this.updateNote(data))
  }

  updateNote = (newNote) => {
    this.setState({users: {...this.state.users, notes: [...this.state.users.notes, newNote]}})
  }


  render(){
    console.log(this.state.users)
    return (
      <div className="App">
        <Navbar users={this.state.users} currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/recipes/:id" render={(routerProps) => <RecipeCard {...routerProps} /> } />

          <Route path="/dashboard/:id" render={(routerProps) => <Dashboard 
          users={this.state.users} 
          activeRecipe={this.state.activeRecipe} 
          currentUser={this.state.currentUser}
          openRecipe={this.openRecipe} 
          newNote={this.newNote}
          {...routerProps} 
          // recipes={this.state.recipes} 
          // recipeLists={this.state.recipeLists} 
          /> } />

          <Route path="/recipes" render={(routerProps) => <RecipeIndex {...routerProps} /> } />

          <Route exact path="/" render={(routerProps) => <Home {...routerProps} users={this.state.users} setUser={this.setUser}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;