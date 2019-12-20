import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jakub', age: 23 },
      { name: 'Bartosz', age:32 },
      { name: 'ania', age: 25 }
    ],
    otherState: 'some value'
  }


  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Kuba', age: 23 },
        { name: 'Robert', age:33 },
        { name: 'ania', age: 25 }
    ]
  })
  }

  render() {
   return (
      <div className="App">
        <h1> Hi, I'm a react app from Jakub!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobbies: cooking</Person>
        <Person />
      </div>
    ); 
  }
}

export default App;
