import React from 'react';
import logo from "./logo.png"
import PropTypes from 'prop-types'
import './Logo.css'

const Logo = ({onClick}) => {
    return (
        <div className={`Logo${(onClick && ' clickable') || ''}`} onClick={onClick}>
            <img src={logo} height={48} width={48} alt="Строим Ваш дом"/>
            <label>Строительные работы</label>
        </div>
    )
};
Logo.propTypes = {
    onClick: PropTypes.func
};
export default Logo;