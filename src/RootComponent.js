/**
 * Root Component
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import MobileApp from './app/MobileApp';
import DesktopApp from './app/DesktopApp';

import React from 'react';
import {Responsive} from 'semantic-ui-react'

const RootComponent = (props) => (
    <div className="RootComponent">
        <Responsive as={MobileApp} {...Responsive.onlyMobile} {...props}/>
        <Responsive as={DesktopApp} {...Responsive.onlyTablet} {...props}/>
        <Responsive as={DesktopApp} {...Responsive.onlyComputer} {...props}/>
    </div>
);
export default RootComponent;