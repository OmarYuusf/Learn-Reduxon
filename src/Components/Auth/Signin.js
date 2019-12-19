import React, { Component } from 'react';

class Signin extends Component {
    constructor( props ){
        super( props );

        this.state = {
            email:"",
            password:""
        }
    }

    HandleCHange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    HandleSignIn = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 white form-signin" onSubmit={this.HandleSignIn}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field col s12">
                        <input  id="email" 
                                type="email" 
                                className="validate" 
                                onChange={this.HandleCHange}/>

                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" 
                               type="password" 
                               className="validate" 
                               onChange={this.HandleCHange}/>

                        <label htmlFor="password">password</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn pink lighten-1 z-depth-0">Sign in</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;