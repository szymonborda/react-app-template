import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.scss';

class App extends React.Component {
    render () {
        return (
            <h1 className={styles.hello}>Hello World!</h1>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
