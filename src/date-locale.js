'use strict';

let firstDayOfWeek = 0;

export function monthHeaderFormatter(date) {
    return service.shortMonths[date.getMonth()] + ' ' + date.getFullYear();
}


export {firstDayOfWeek};

