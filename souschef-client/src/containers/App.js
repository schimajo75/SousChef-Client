import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Dashboard from './Dashboard'
import CreateRecipe from '../components/CreateRecipe';

const userAPI = 'http://localhost:3000/api/v1/users'
const notesAPI = 'http://localhost:3000/api/v1/notes'
const recipeAPI = 'http://localhost:3000/api/v1/recipes'
const rec_ingAPI = 'http://localhost:3000/api/v1/recipe_ingredients'
const recipeListAPI = 'http://localhost:3000/api/v1/recipe_lists'
const ingredientAPI = 'http://localhost:3000/api/v1/ingredients'


class App extends React.Component {

  state = {
    users: [],
    recipes: [],
    ingredients: [],
    recipeIngredients: [],
    recipeLists: [],
    activeUser: {},
    activeRecipe: {},
    newRecipe: {}
  }

  componentDidMount() {
    fetch(userAPI).then(r => r.json()).then(user => this.setState({users: user }))
    fetch(recipeAPI).then(r => r.json()).then(recipe => this.setState({recipes: recipe }))
    fetch(rec_ingAPI).then(r => r.json()).then(recing => this.setState({recipeIngredients: recing }))
    fetch(ingredientAPI).then(r => r.json()).then(ing => this.setState({ingredients: ing }))
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
      this.setState({users: [...this.state.users, user], activeUser: user, activeRecipe: {}}, () => history.push(`/dashboard/${user.id}`))
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
      this.setState({activeUser: {...this.state.activeUser, recipe_lists: [...this.state.activeUser.recipe_lists, recipe]}}) 
    })
  }
  
  createRecipe = (name, image) => {
    fetch(recipeAPI, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        image: image
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => {
      this.setState({newRecipe: {...this.state.newRecipe, data}})
    })
  }


  newNote = (note) => {
    let targetList = this.state.activeUser.recipe_lists.find(list => list.recipe_id === this.state.activeRecipe.id)
    fetch(notesAPI, {
      method: 'POST',
      body: JSON.stringify({
        entry: note,
        recipe_list_id: targetList.id
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(r => r.json())
    .then(note => {
      let targetListIndex = this.state.activeUser.recipe_lists.findIndex(list => list.recipe_id === this.state.activeRecipe.id)
      targetList.notes.push(note)
      let copyUser = {...this.state.activeUser}
      copyUser.recipe_lists.splice(targetListIndex, 1, targetList)
      this.setState({activeUser: copyUser}) 
    }
  )
}


  deleteNote = (id) => {
    fetch(`${notesAPI}/${id}`, {
      method: 'DELETE',
  })
  .then((json) => {
    let targetList = this.state.activeUser.recipe_lists.find(list => list.recipe_id === this.state.activeRecipe.id)
    let targetListIndex = this.state.activeUser.recipe_lists.findIndex(list => list.recipe_id === this.state.activeRecipe.id)
    let targetNoteIndex = targetList.notes.findIndex(note => note.id === id)
    let editedUser = {...this.state.activeUser}
    editedUser.recipe_lists[targetListIndex].notes.splice(targetNoteIndex, 1)
    this.setState({activeUser: editedUser})
 })
}


  render(){
    // console.log(this.state.activeUser.recipe_lists)
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

          <Route path="/create" render={(routerProps) => <CreateRecipe 
          users={this.state.users}
          recipes={this.state.recipes}
          ingredients={this.state.ingredients}
          recipeIngredients={this.state.recipeIngredients}
          newRecipe={this.state.newRecipe}
          createRecipe={this.createRecipe}
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