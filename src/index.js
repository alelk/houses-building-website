import RootComponent from './RootComponent'
import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
    <BrowserRouter basename='/houses-building-website/'>
        <Route path="/" component={RootComponent}/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
