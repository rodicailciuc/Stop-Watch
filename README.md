# Stop Watch

> A nice stop watch

## Table of contents

- [Stop Watch](#stop-watch)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript.

## Screenshots

![Example screenshot](./assets/Capture%20d’écran%202024-05-09%20205910.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

```js
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
```



## Status

Project is: _in progress_

## Inspiration

## Contact
