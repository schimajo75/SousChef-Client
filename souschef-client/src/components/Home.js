import React from 'react';

class Home extends React.Component {
    state = {
        isNewUser: false,
        name: '',
        email: '',
        confirmation: ''
    }

    toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, email: '', name: ''}))

    handleChange = e => this.setState({ [e.target.name]: e.target.value })


    handleSignUp = e => {
        const { isNewUser, name, email, confirmation } = this.state;
        if (isNewUser && email === confirmation) {
          this.props.createUser(name, email, this.props.history)

        } else {
          alert('try again!')
        }
    }

    filterAndRedirect = (id) => {
        this.props.setUser(id)
        this.props.history.push(`/dashboard/${id}`) 
    }
    

    handleLogin = () => {
      const { name, email } = this.state;
      let login = this.props.users.find(user => 
        name === user.name && email === user.email
      )
      login ? this.filterAndRedirect(login.id): alert("try again, or Sign up.")
      }
        
    

    renderLogin = () => {
        const { name, email } = this.state;
        return (
            <>
                <input name="name" placeholder="name" value={name} onChange={this.handleChange}/>
                <input name="email" placeholder="email" type="email" value={email} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleLogin}>Submit</button>
            </>
        )
    }

    renderSignup = () => {
        const { name, email, confirmation } = this.state;
        return (
            <>
                <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input name="email" placeholder="Email" type="email" value={email} onChange={this.handleChange}/>
                <input name="confirmation" placeholder="Confirm Email"  type="email" value={confirmation} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSignUp}>Submit</button>
            </>
        )
    }
    
    render(){
        let { isNewUser } = this.state;
        return (
            <div className="auth">
                <h3 >{isNewUser ? 'Sign Up' : 'Login'}</h3>
                { isNewUser ? this.renderSignup() : this.renderLogin() }
                <div  onClick={this.toggleNewUser}>{isNewUser ? <> <p>got an account? ↓</p> <button >Login Instead</button> </> : <> <p>first time? ↓</p> <button  >Sign Up Here</button> </>}</div>
                
            </div>
        )
    }
}

export default Home;