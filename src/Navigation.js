import React from 'react';
import PropTypes from 'prop-types'
import './Navigation.css'

const Navigation = ({className, logo, children}) => {
    return (
        <div className={`Navigation${(className && ' ' + className) || ''}`}>
            <div className="logo">{logo}</div>
            <ul className="navItems">
                {children &&
                React.Children.map(children,
                    (child, i) => <li key={i}>{child}</li>
                )
                }
            </ul>
        </div>
    )
};
Navigation.propTypes = {
    className:PropTypes.string,
    logo: PropTypes.object
};

export default Navigation;
