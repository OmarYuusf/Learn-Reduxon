import React, {Component} from 'react';
import "./App.css"

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="form">
            <input type="text" placeholder="name" />
            <input type="number" placeholder="Age" />
            <button>Submit</button>
        </div>
        <div className="container-persons">
            <div className="person">
                <h6>Omar Yuusf</h6>
                <p>22</p>
            </div>
            <div className="person">
              <h6>Omar Yuusf</h6>
              <p>22</p>
            </div>
            <div className="person">
              <h6>Omar Yuusf</h6>
              <p>22</p>
            </div>
            <div className="person">
              <h6>Omar Yuusf</h6>
              <p>22</p>
            </div><div className="person">
              <h6>Omar Yuusf</h6>
              <p>22</p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
