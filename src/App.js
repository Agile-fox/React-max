import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from 'react-dom';

class App extends Component {
  state = {
    persons: [
      { name: 'Jakub', age: 23 },
      { name: 'Bartosz', age:32 },
      { name: 'ania', age: 25 }
    ],
    otherState: 'some value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Robert', age:33 },
        { name: 'ania', age: 25 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jakub', age: 36 },
        { name: event.target.value, age: 36 },
        { name: 'ania', age: 27 }
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    };

   return (
      <div className="App">
        <h1> Hi, I'm a react app from Jakub!</h1>
        <button
        style={style} 
        //onClick={this.switchNameHandler.bind(this, 'Max')}
        onClick={() => this.switchNameHandler('anastazja')} //<---another method, we pass anonymous function which will be executed on a click and then resulst of this function getting executed
        >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Bartłomiej!')}
          changed={this.nameChangeHandler}> 
          My hobbies: cooking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> 
          
          My hobbies: cooking</Person>
        <Person />
      </div>
    ); 
  }
}

export default App;
