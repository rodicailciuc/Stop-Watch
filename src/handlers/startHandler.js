import data from '../data.js';
import dom from '../dom.js';
import updateTimeDom from '../components/updateTimeDom.js';
import updateTime from '../utils/updateTime.js';

/**
 * Starts the timer by setting up an interval to update the time components in the DOM.
 * If there is an existing interval, it is cleared before starting a new one.
 */

const startHandler = () => {
    if (data.intervalId !== null) {
        clearInterval(data.intervalId);
    }

    data.intervalId = setInterval(() => {
        const newData = updateTime(data);
        updateTimeDom(dom.time, newData);
    }, 10);
};

export default startHandler;
