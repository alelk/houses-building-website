/**
 *
 *
 * Created by Alex Elkin on 17.10.2017.
 */

import Navigation from './Navigation'
import './App.css';

import React, { Component } from 'react';
import {Link, Element, scrollSpy, animateScroll} from 'react-scroll'
import Logo from './Logo'

class App extends Component {

    componentWillMount() {
        scrollSpy.update();
    }

    render() {
        return (
            <div className="App">
                <Navigation logo={<Logo onClick={animateScroll.scrollToTop}/>}>
                    <Link activeClass='active'
                          className="element1"
                          to="element1"
                          spy={true}
                          smooth={true}
                          offset={-44}
                          duration={500}>
                        Element1
                    </Link>
                    <Link activeClass='active'
                          className="element2"
                          to="element2"
                          spy={true}
                          smooth={true}
                          offset={-44}
                          duration={500}>
                        Element2
                    </Link>
                </Navigation>
                <div className="content">
                    <Element name="element1" className="element" style={{height:1000}}>Element1</Element>
                    <Element name="element2" className="element" style={{height:1000}}>Element2</Element>
                </div>
            </div>
        );
    }
}

export default App;