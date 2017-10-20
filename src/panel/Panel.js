/**
 * Panel
 *
 * Created by Alex Elkin on 19.10.2017.
 */

import React from 'react';
import PropTypes from 'prop-types'

const Panel = ({className, children}) => {
    return (
        <div className={`Panel${(className && ' ' + className) || ''}`}>
            <div className="content">
                {children}
            </div>
        </div>
    )
};
Panel.propTypes = {
    className : PropTypes.string
};

export default Panel;