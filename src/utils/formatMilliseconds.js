/**
 * Formats the milliseconds unit to a specific format.
 *
 * @param {number} unit - The milliseconds unit to be formatted.
 * @returns {string|number} - The formatted milliseconds unit.
 */

const formatMilliseconds = (milliseconds) => {
    if (milliseconds < 10) {
        return `00${milliseconds}`;
    } else if (milliseconds < 100) {
        return `0${milliseconds}`;
    } else {
        return milliseconds;
    }
};

export default formatMilliseconds;

// let formattedUnit;
// if (unit < 10) {
//     formattedUnit = '00' + unit;
// } else if (unit < 100) {
//     formattedUnit = '0' + unit;
// } else {
//     formattedUnit = unit;
// }

// return formattedUnit;
