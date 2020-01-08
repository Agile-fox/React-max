import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1asd', name: 'Jakub', age: 23 },
      { id: 'sdads', name: 'Bartosz', age:32 },
      { id: 'werw', name: 'ania', age: 25 }
    ],
    otherState: 'some value',
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenicated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( { persons: persons});
  }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] ComponentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]
    };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

    this.setState((prevState, props) => {
     return {
      persons: persons, 
      changeCounter: prevState.changeCounter +1
     };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenicated: true});
  };

  render(){
   console.log('[App.js] render');
    let persons = null;


    if (this.state.showPersons) {
      persons = 
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenicated={this.state.authenicated}
          />
        </div>
      ;
    }

 

   return (
      <Auxiliary classes={classes.App}>
      <button
        onClick={() => {
          this.setState({ showCockpit: false});
        }}
        >
        Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenicated: this.state.authenicated,
          login: this.loginHandler
        }}>
        {this.state.showCockpit ?
        <Cockpit
          title={this.props.appTitle} 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        /> :null}
        {persons}
        </AuthContext.Provider>
      </Auxiliary>
    ); 
  }
}

export default withClass(App, classes.App);