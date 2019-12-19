import React, { Component } from 'react';
import {connect} from "react-redux";
import {createProjects} from "../../Store/Actions/ProjectsActions"

class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        return (
            <div className="container">
                <div className="col s12 white form-signin" onSubmit={this.HandleCreateProject}>
                    <h5 className="grey-text text-darken-3">Create project</h5>
                    <div className="input-field col s12">
                        <input id="title"
                            type="text"
                            className="validate"
                            onChange={this.HandleChange} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="content"
                            type="text"
                            className="validate"
                            onChange={this.HandleChange} />
                        <label htmlFor="content">content</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn pink lighten-1 z-depth-0" 
                            onClick={() => this.props.handleCreate(this.state)}
                        >Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleCreate: (project) => dispatch(createProjects(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);