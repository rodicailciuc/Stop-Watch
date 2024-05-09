import formatMilliseconds from '../utils/formatMilliseconds.js';
import formatUnit from '../utils/formatUnit.js';


/**
 * Updates the time components in the DOM.
 *
 * @param {object} timeDom - The DOM element containing time components.
 * @param {object} time - The time object containing
 * milliseconds, seconds, minutes, and oldSeconds and oldMinutes properties.
 */

const updateTimeDom = (timeDom, time) => {
    if (!time || !('milliseconds' in time) || !('seconds' in time) || !('minutes' in time)) {
        console.error(new Error('Invalid time object:', time));
        return;
    }

    // Ensure timeDom is provided and has child elements
    if (!timeDom) return;

    // Get DOM elements for each time unit
    const millisecondsElement = timeDom.querySelector('.milliseconds');
    const secondsElement = timeDom.querySelector('.seconds');
    const minutesElement = timeDom.querySelector('.minutes');

    // Update milliseconds in the DOM
    if (millisecondsElement) {
        millisecondsElement.innerHTML = formatMilliseconds(time.milliseconds);
    }

    // Update seconds in the DOM if there is a change
    if (time.seconds !== time.oldSeconds && secondsElement) {
        secondsElement.innerHTML = formatUnit(time.seconds);
    }

    // Update minutes in the DOM if there is a change
    if (time.minutes !== time.oldMinutes && minutesElement) {
        minutesElement.innerHTML = formatUnit(time.minutes);
    }

    // Update the time object's oldSeconds and oldMinutes
    time.oldSeconds = time.seconds;
    time.oldMinutes = time.minutes;
};

export default updateTimeDom;

