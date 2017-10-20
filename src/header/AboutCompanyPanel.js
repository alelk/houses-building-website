/**
 * About Company Panel
 *
 * Created by Alex Elkin on 19.10.2017.
 */

import {Contacts} from '../data/data'
import Panel from '../panel/Panel'
import './AboutCompanyPanel.css'
import logo from './logo.svg'

import React from 'react';
import PropTypes from 'prop-types'

const AboutCompanyPanel = ({className}) => {
    return (
        <Panel className={`AboutCompanyPanel${(className && ' ' + className) || ''}`}>
            <img className="logo" src={logo}/>
            <label className="company">
                <span className="name">Строительная бригада</span>
                <span className="location">г. Павлово</span>
            </label>
        </Panel>
    )
};
AboutCompanyPanel.propTypes = {
    className: PropTypes.string
};
export default AboutCompanyPanel;