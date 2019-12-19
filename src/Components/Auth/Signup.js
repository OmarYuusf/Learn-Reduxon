import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName:"",
            lastName:""
        }
    }

    HandleCHange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    HandleSignUp = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 white form-signin" onSubmit={this.HandleSignUp}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field col s12">
                        <input id="firstName"
                                type="text"
                                className="validate"
                                onChange={this.HandleCHange} />
                        <label htmlFor="firstName">firstname</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="lastName"
                               type="text"
                                className="validate"
                                onChange={this.HandleCHange} />
                        <label htmlFor="lastName">lastname</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="email"
                            type="email"
                            className="validate"
                            onChange={this.HandleCHange} />

                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password"
                            type="password"
                            className="validate"
                            onChange={this.HandleCHange} />

                        <label htmlFor="password">password</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;