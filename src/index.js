import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/navigation-bar';
import Header from './components/header';
import Game from './components/game';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
