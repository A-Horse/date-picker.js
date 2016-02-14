var DateLocale = (function(){
    var firstDayOfWeek = 0;

    var service =  {
        firstDayOfWeek: firstDayOfWeek,
        monthHeaderFormatter: function(date){
            return service.shortMonths[date.getMonth()] + ' ' + date.getFullYear();
        }
    };
    return service;
})();

DateLocale.firstDayOfWeek = 0;

var DateUtil = function(){
    
};

DateUtil.isValidDate = function(date){
    return date != null && date.getTime && !isNaN(date.getTime());

};

DateUtil.getFirstDateOfMonth = function(date){
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

DateUtil.getNumberOfDaysInMonth = function(date){
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

DateUtil.getDateInNextMonth = function(date){
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};






/**
 *   
 * Calendar
 * 
 */
var Calendar = function(){
    
};

Calendar.prototype.build = function(){
    
};


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



var DatePicker = function(){
    
};

DatePicker.prototype.init = function(){
    
};

DatePicker.prototype.open = function(){

};



