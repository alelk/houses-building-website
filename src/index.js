import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import 'typeface-roboto'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
