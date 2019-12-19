import React, { Component } from 'react';

class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    HandleCHange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    HandleCreateProject = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 white form-signin" onSubmit={this.HandleCreateProject}>
                    <h5 className="grey-text text-darken-3">Create project</h5>
                    <div className="input-field col s12">
                        <input id="title"
                            type="text"
                            className="validate"
                            onChange={this.HandleCHange} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="content"
                            type="text"
                            className="validate"
                            onChange={this.HandleCHange} />
                        <label htmlFor="lastName">content</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;