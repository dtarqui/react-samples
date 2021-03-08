import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons: [
      { name: 'Cosme', age:23},
      { name: 'Fulano', age:24},
      { name: 'Fhulano', age:25},
    ],
    otherState: 'some value'
  }

  switchNameHandler = () => {
    console.log(this.state)
    // DON'T DO THIS this.state.persons[0].name = 'Fulanero'
    this.setState({
      persons: [
        { name: 'Fulanero', age:23},
        { name: 'Fulano', age:24},
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Work</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name='Cosme' age='23' />
        <Person name='Fulano' age='24'>My Hobbies: Racing </Person>
        <Person name='Fhulano' age='25' />
        {/* <Person name={this.state}></Person> */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement())
  }
}

export default App;
