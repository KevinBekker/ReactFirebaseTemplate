import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Firebase files
import { withFirebase } from 'firebase/context';
import { withAuthentication } from 'session';
import style from './index.module.scss';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
     
        };
    }

    componentDidMount() {
        //Get amount of participants from db
        this.props.firebase.database().on('value', (snapshot) => {

            // let temp = Object.keys(snapshot.val());
            console.log(snapshot.val())

        });
    }

    render() {
        
        const { } = this.state;
        
        return (
            <div className={style.mainWrapper}>
                <h1>Test</h1>
             </div>

        );
    }
}

export default compose(withFirebase, withAuthentication)(App);
