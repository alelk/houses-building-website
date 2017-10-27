/**
 * House Building Calculator Panel
 *
 * Created by Alex Elkin on 25.10.2017.
 */
import Panel from './Panel'
import HouseBuildingCalc from '../calculator/HouseBuildingCalc'
import './HouseBuildingCalculatorPanel.css'

import React from 'react';

const HouseBuildingCalculatorPanel = () => {
    return (
        <Panel className="HouseBuildingCalculatorPanel">
            <HouseBuildingCalc/>
        </Panel>
    )
};

export default HouseBuildingCalculatorPanel;