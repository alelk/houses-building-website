/**
 * About Company Panel
 *
 * Created by Alex Elkin on 19.10.2017.
 */

import Panel from '../panel/Panel'
import './AboutCompanyPanel.css'
import '../img/sprite-48px-white.css'

import React from 'react';
import PropTypes from 'prop-types'

const AboutCompanyPanel = ({className, onLogoClick}) => {
    return (
        <Panel className={`AboutCompanyPanel${(className && ' ' + className) || ''}`}
               centerVertically={true}>
            <div onClick={onLogoClick} className="logo ic_store_white_48px"/>
            <label className="company">
                <span className="name">Строительная бригада</span>
                <span className="location">г. Павлово</span>
            </label>
        </Panel>
    )
};
AboutCompanyPanel.propTypes = {
    className: PropTypes.string,
    onLogoClick: PropTypes.func
};
export default AboutCompanyPanel;