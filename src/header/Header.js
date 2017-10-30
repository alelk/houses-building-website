/**
 * Site Header
 *
 * Created by Alex Elkin on 17.10.2017.
 */
import AboutCompanyPanel from './AboutCompanyPanel'
import {Contacts} from '../data/data'
import header_background from '../header-background.jpeg'
import './Header.css'

import React from 'react';
import MediaQuery from 'react-responsive';

class Header extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <MediaQuery minWidth={1200}>
                {(matches) => (
                    <div className="Header">
                        <div className="image-area">
                            <div className="content">
                                <img className="header-background" src={header_background}/>
                                <div className="filter"/>
                                <AboutCompanyPanel className={matches ? 'desktop' : 'mobile'}/>
                                {children}
                            </div>
                        </div>
                        {children}
                    </div>
                )}
            </MediaQuery>
        )
    }
}

export default Header;