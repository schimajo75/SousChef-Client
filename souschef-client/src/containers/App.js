import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Dashboard from './Dashboard'

const userAPI = 'http://localhost:3000/api/v1/users'
const notesAPI = 'http://localhost:3000/api/v1/notes'
const recipeAPI = 'http://localhost:3000/api/v1/recipes'
const rec_ingAPI = 'http://localhost:3000/api/v1/recipe_ingredients'
const recipeListAPI = 'http://localhost:3000/api/v1/recipe_lists'


class App extends React.Component {

  state = {
    users: [],
    recipes: [],
    recipeIngredients: [],
    activeUser: {},
    activeRecipe: {},
  }

  componentDidMount() {
    fetch(userAPI).then(r => r.json()).then(user => this.setState({users: user }))
    fetch(recipeAPI).then(r => r.json()).then(recipe => this.setState({recipes: recipe }))
    fetch(rec_ingAPI).then(r => r.json()).then(recing => this.setState({recipeIngredients: recing }))
  }

  createUser = (name, email, history) => {
    let bodyObj = {name: name, email: email}
    fetch(userAPI, {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(user => {
      this.setState({users: user}, () => history.push(`/recipes/${user.id}`))
    })
  }

  setUser = (id) => {
    this.setState({activeRecipe: {}})
     let filtered = this.state.users.filter(user => user.id === id)
     this.setState({activeUser: filtered[0]})
  }

  openRecipe = (id) => {
    let activeRecipe = this.state.recipes.find(recipe => recipe.id === id)
    this.setState({activeRecipe: activeRecipe})
  }

  postRecipe = (recId, userId) => {
    fetch(recipeListAPI, {
      method: 'POST',
      body: JSON.stringify({
        recipe_id: recId,
        user_id: userId
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(recipe => {
      let newRecipe = this.state.recipes.find(rec => rec.id === recipe.recipe_id)
      this.setState({activeUser: {...this.state.activeUser, recipes: [...this.state.activeUser.recipes, newRecipe]}}) 
    })
  }

  newNote = (note) => {
    fetch(notesAPI, {
      method: 'POST',
      body: JSON.stringify({
        entry: note,
        recipe_list_id: `${this.state.activeRecipe.recipe_lists[0]["id"]}`,
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  
  // updateNote = (newNote) => {
  //   this.setState({activeRecipe: {...this.state.activeRecipe, recipe_lists: [...this.state.activeRecipe.recipe_lists, this.state.activeRecipe.recipe_lists[0]: {}}})
  // }

  deleteNote = (id) => {
    fetch(`${notesAPI}/${id}`, {
      method: 'DELETE',
  })
//   .then((json) => {
//     let editedActiveRecipe = this.state.activeUser.recipe_lists[0].notes.filter(note => note.id !== id)
//     this.setState({activeRecipe: editedActiveRecipe})
//  })
 
}


  render(){
    // console.log(this.state.activeRecipe)
    return (
      <div className="App">
        <Navbar activeUser={this.state.activeUser} 
        />
        <Switch>

          <Route path="/dashboard/:id" render={(routerProps) => <Dashboard 
          users={this.state.users}
          activeUser={this.state.activeUser} 
          recipes={this.state.recipes}
          recipeIngredients={this.state.recipeIngredients}
          activeRecipe={this.state.activeRecipe} 
          openRecipe={this.openRecipe} 
          postRecipe={this.postRecipe}
          newNote={this.newNote}
          deleteNote={this.deleteNote}
          {...routerProps} 
          /> } />

          <Route exact path="/" render={(routerProps) => <Home 
          {...routerProps} 
          users={this.state.users} 
          setUser={this.setUser}
          createUser={this.createUser}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;