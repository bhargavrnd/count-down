import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountDownList from './components/CountDownList'
import * as serviceWorker from './serviceWorker';


    let listItems =  [{'itemName': 'Birthday', 'itemDate': '05/04/2020' }];

ReactDOM.render(<CountDownList listItems={listItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
