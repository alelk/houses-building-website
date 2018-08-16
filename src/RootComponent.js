/**
 * Root Component
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import App from './app/App';

import React from 'react';
import {Responsive} from 'semantic-ui-react'

const RootComponent = (props) => (
    <div className="RootComponent">
        <Responsive as={App} {...Responsive.onlyMobile} {...props} mobile/>
        <Responsive as={App} {...Responsive.onlyTablet} {...props}/>
        <Responsive as={App} {...Responsive.onlyComputer} {...props}/>
    </div>
);
export default RootComponent;