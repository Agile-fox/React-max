import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '..//../../context/auth-context';

class Person extends Component { 
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenicated);
    }


    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                { this.context.authenicated ? <p>Authenticated!</p> : <p>Please log in</p>}
                 <p onClick={this.props.click}>I'm a {this.props.name}! And i have {this.props.age} years old</p>
                 <p key="i2">{this.props.children}</p>
                 <input 
                 key="i3"
                 //ref={(inputEL) => {this.inputElement = inputEL}}
                 ref={this.inputElementRef}
                 type="text"
                 onChange={this.props.changed}
                 value={this.props.name}/>
            </Fragment>
        );
     }
}
   
Person.propTypes = {
    click: PropTypes.func, // expect a function
    name: PropTypes.string, // expect a string
    age: PropTypes.number, // expect number
    changed: PropTypes.func // expect a function
};

export default withClass(Person, classes.Person);

