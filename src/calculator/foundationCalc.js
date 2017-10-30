/**
 * House Foundation Calculator
 *
 * Created by Alex Elkin on 25.10.2017.
 */

import {foundationHeight, foundationThickness, foundationSubstanceCost} from './constants'
import {housePerimeter} from './calculationUtils'

const calculateFoundationCost = (houseArea, floorsCount) => {
    const substanceCost = (housePerimeter(houseArea, floorsCount) * foundationHeight * foundationThickness * foundationSubstanceCost);
    const foundationFittingsCost = substanceCost * 0.12;
    return substanceCost * 2 + foundationFittingsCost;
};

export default calculateFoundationCost;