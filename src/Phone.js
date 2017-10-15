import React from 'react';
import PropTypes from 'prop-types'

const Phone = ({phoneNumber}) => {
    return (
        <div className="Phone">
            <label>{phoneNumber}</label>
        </div>
    )
};

Phone.propTypes = {
    phoneNumber : PropTypes.string
};

export default Phone;