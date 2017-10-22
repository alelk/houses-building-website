import {Contacts} from './data/data'
import './Navigation.css'
import './img/sprite-24px-white.css'

import React from 'react';
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isDrawerOpened:false};
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    navItems(children) {
        return (
            <ul className="navItems">
                {children &&
                React.Children.map(children,
                    (child, i) => <li key={i} className="navItem">{child}</li>
                )
                }
            </ul>)
    }

    phoneNumber() {
        return (
            <label className="phone">
                <div className="icon ic_call_white_24px"/>
                <span className='phone'>{Contacts.phoneNumber}</span>
            </label>
        )
    }

    onMenuClick() {
        this.setState({isDrawerOpened:!this.state.isDrawerOpened})
    }

    render() {
        const {className, children} = this.props;
        return (
            <MediaQuery minWidth={1000}>
                {(isDesktop) => (
                    <div className={`Navigation${(className && ' ' + className) || ''}${isDesktop?' desktop':' mobile'}`}>
                        {!isDesktop &&
                        <div onClick={this.onMenuClick} className="ic_menu_white_48px menuIcon"/>
                        }
                        {(isDesktop || this.state.isDrawerOpened) && this.navItems(children)}
                        {this.phoneNumber()}
                    </div>)
                }
            </MediaQuery>
        )
    }
}

Navigation.propTypes = {
    className:PropTypes.string,
    logo: PropTypes.object
};

export default Navigation;
