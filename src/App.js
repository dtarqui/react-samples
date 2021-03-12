import React, {
  useState
} from 'react';
import './App.css';
import Person from "./Person/Person.js"

const app = () => {
  const [personState, setPersonsState] = useState({
    persons: [{
        name: 'Cosme',
        age: 23
      },
      {
        name: 'Fulano',
        age: 24
      },
      {
        name: 'Fhulano',
        age: 25
      },
    ],
    otherState: 'some value'
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [{
          name: newName,
          age: 23
        },
        {
          name: 'Fulano',
          age: 24
        },
      ],
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [{
          name: event.target.value,
          age: 50
        },
        {
          name: 'Fulano',
          age: 24
        },
      ],
    })
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Work</p>
      <button onClick={()=> switchNameHandler('Fhulanero')}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person click={switchNameHandler.bind(this, 'Cosme')} name='Fulano' age='24'>My Hobbies: Racing </Person>
      <Person name='Fhulano' age='25' />
      <Person name="Dude" age='90' changed={nameChangeHandler}></Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement())

}

export default app;