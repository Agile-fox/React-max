import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = React.useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenicated);


    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //https requst
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[cockpit.js] 2nd useEffect');
        return () => {
            console.log('[cockpit.js] clenupo work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if ( props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
  }


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>It works!</p>
            <button
            ref={toggleBtnRef} 
            className={btnClass}
            onClick={props.clicked} 
            >Toggle persons</button>

            <button onClick={authContext.login}> Log in</button>
 
        </div>
    );
};

export default React.memo(cockpit);