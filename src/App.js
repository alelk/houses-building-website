import Navigation from './Navigation'
import Header from './header/Header'
import './App.css';

import AboutCompanyPanel from './header/AboutCompanyPanel'
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {Switch, Route, Link, withRouter} from 'react-router-dom'

class App extends Component {

    renderNavigationMenu(className) {
        return (
            <Navigation>
                <Link to="/">Услуги</Link>
                <Link to="/about">О нас</Link>
            </Navigation>
        )
    }

    render() {
        return (
            <MediaQuery minWidth={1200}>
                {(matches) => (
                    <div className="App">
                        <Header>
                            {matches && this.renderNavigationMenu('desktop') || undefined}
                        </Header>
                        {!matches && this.renderNavigationMenu('mobile') || undefined}
                        <content>
                            <Switch>
                                <Route exact path={'/'} render={() => "Home"}/>
                                <Route path={'/about'} render={() => "About"}/>
                            </Switch>
                        </content>
                    </div>
                )}
            </MediaQuery>
        );
    }
}

export default App;

/*
 <Header>
 <Navigation logo={withRouter(({history}) => <Logo onClick={() => history.push("/")}/>)}>
 <Link to="/">Услуги</Link>
 <Link to="/about">О нас</Link>
 </Navigation>
 </Header>
 <content>
 <Switch>
 <Route exact path={'/'} render={() => "Home"}/>
 <Route path={'/about'} render={() => "About"}/>
 </Switch>
 </content>*/