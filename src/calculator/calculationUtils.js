/**
 * Calculation Utils
 *
 * Created by Alex Elkin on 25.10.2017.
 */

export const houseSide = (houseArea, floorsCount = 1) => {
    return Math.sqrt(parseInt(houseArea, 10)/ parseInt(floorsCount, 10));
};

export const housePerimeter = (houseArea, floorsCount = 1) => {
    return houseSide(houseArea, floorsCount) * 4;
};