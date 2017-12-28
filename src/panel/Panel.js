/**
 * Panel
 *
 * Created by Alex Elkin on 19.10.2017.
 */

import React from 'react';
import PropTypes from 'prop-types'

import './Panel.css'

const Panel = ({className, children, centerVertically}) => {
    return (
        <div className={`Panel${(className && ' ' + className) || ''}${(centerVertically && ' centerVertically')||''}`}>
            <div className="content">
                {children}
            </div>
        </div>
    )
};
Panel.propTypes = {
    className : PropTypes.string,
    centerVertically : PropTypes.bool
};

export default Panel;