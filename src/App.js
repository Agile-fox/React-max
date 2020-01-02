import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: '1a', name: 'Jakub', age: 23 },
      { id: '2a', name: 'Bartosz', age:32 },
      { id: '3a', name: 'ania', age: 25 }
    ],
    otherState: 'some value',
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( { persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]
    };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = [person];

    this.setState( {persons: persons} )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if ( this.state.persons.length <= 2) {
        classes.push('red');
    }
    if ( this.state.persons.length <= 1) {
      classes.push('bold');
  }

   return (
     <StyleRoot>
      <div className="App">
        <h1> Hi, I'm a react app from Jakub!</h1>
        <p className={classes.join(' ')}>It works!</p>
        <button
        style={style} 
        //onClick={this.switchNameHandler.bind(this, 'Max')}
        onClick={this.togglePersonHandler} //<---another method, we pass anonymous function which will be executed on a click and then resulst of this function getting executed
        >Toggle persons</button>
        {persons}
      </div>
      </StyleRoot>
    ); 
  }
}

export default Radium(App);
