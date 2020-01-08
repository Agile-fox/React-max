import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'

class Person extends Component { 
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                 <p onClick={this.props.click}>I'm a {this.props.name}! And i have {this.props.age} years old</p>
                 <p key="i2">{this.props.children}</p>
                 <input 
                 key="i3"
                 type="text"
                 onChange={this.props.changed}
                 value={this.props.name}/>
            </Fragment>
        );
     }
}
   

export default Person;

