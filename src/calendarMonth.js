/**
 *   
 * CalendarMonth
 * 
 */
var CalendarMonth = function(){
    
};

CalendarMonth.prototype.getLocaleDay = function(date){
    return (date.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
};

CalendarMonth.prototype.buildDateRow = function(rowNumber){
    var row = document.createElement('tr');

    row.setAttribute('role', 'row');
    return row;
};

CalendarMonth.prototype.buildCalendarForMonth = function(dateInMonth){
    var date = DateUtil.isValidDate(dateInMonth) ? dateInMonth : new Date();

    var firstDayOfMonth = DateUtil.getFirstDateOfMonth(date),
        firstDayOfTheWeek = this.getLocaleDay(firstDayOfMonth),
        numberOfDaysInMonth = DateUtil.getNumberOfDaysInMonth(date);

    var monthBody = document.createDocumentFragment();

    var rowNumber = 1;
    var row = this.buildDateRow(rowNumber);
    monthBody.appendChild(row);

    // TODO
    //var isFinalMonth = this.offset === this.calendar

    var blankCellOffset = 0;
    var monthlabelCell = document.createElement('td');
    monthlabelCell.classList.add('md-calendar-month-label');

    monthlabelCell.textContent = DateLocale.monthHeaderFormatter(date);

    

};
