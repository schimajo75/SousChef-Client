import React from 'react';
import Boiling from './video/Boiling.mp4'
import { Button } from 'react-bootstrap'

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
                <input className="inputName" name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input className="inputPass" name="email" placeholder="Password" type="password" value={email} onChange={this.handleChange}/>
                <div onClick={this.handleLogin} class="logo"><b>S<span>ous</span><span>M</span>e</b></div>
            </>
        )
    }

    renderSignup = () => {
        const { name, email, confirmation } = this.state;
        return (
            <>
                <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input name="email" placeholder="Password" type="password" value={email} onChange={this.handleChange}/>
                <input name="confirmation" placeholder="Confirm Password"  type="password" value={confirmation} onChange={this.handleChange}/>
                <div onClick={this.handleSignUp} class="logo"><b>S<span>ous</span><span>M</span>e</b></div>
            </>
        )
    }
    
    render(){
        let { isNewUser } = this.state;
        return (
            <div className="auth">
              <h3 >{isNewUser ? 'Sign Up' : 'Login'}</h3>
                { isNewUser ? this.renderSignup() : this.renderLogin() }
                <div className="login-toggle" onClick={this.toggleNewUser}>{isNewUser ? <> <p>have an account?</p> <Button variant="outline-danger">Login Instead</Button> </> : <> <p>first time?</p> <Button variant="outline-danger" >Sign Up Here</Button> </>}</div>
              <video autoPlay loop muted
              style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                
              }}
              >
                <source src={Boiling} type="video/mp4"/>
              </video>
            </div>
        )
    }
}

export default Home;