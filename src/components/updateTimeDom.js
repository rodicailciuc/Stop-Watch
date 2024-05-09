import formatMilliseconds from '../utils/formatMilliseconds.js';
import formatUnit from '../utils/formatUnit.js';

/**
 * Updates the time components in the DOM.
 *
 * @param {object} time - The time object containing
 * milliseconds, seconds, minutes, and oldSeconds properties.
 */

const updateTimeDom = (timeDom, time) => {
    timeDom.querySelector('.milliseconds').innerHtml = formatMilliseconds(
        time.milliseconds,
    );

    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerHtml = formatUnit(time.seconds);
    }

    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerHtml = formatUnit(time.minutes);
    }
    time.oldMinutes = time.minutes;
    time.oldSeconds = time.seconds;
};

export default updateTimeDom;
