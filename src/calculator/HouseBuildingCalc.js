/**
 * House Building Calculator
 *
 * Created by Alex Elkin on 23.10.2017.
 */

import Slider from 'react-toolbox/lib/slider'
import React from 'react';
import PropTypes from 'prop-types'

class HouseBuildingCalc extends React.Component {


    render() {
        return (
            <section className="HouseBuildingCalc">
                <Slider pinned snaps min={10} max={200} step={1}/>
            </section>
        )
    }
}

export default HouseBuildingCalc;