陈灿豪  14:11:15
https://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt
陈灿豪  17:28:34
127.0.0.1	activate.adobe.com practivate.adobe.com ereg.adobe.com wip3.adobe.com activate.wip3.adobe.com 3dns-3.adobe.com 3dns-2.adobe.com adobe-dns.adobe.com adobe-dns-2.adobe.com adobe-dns-3.adobe.com ereg.wip3.adobe.com activate-sea.adobe.com wwis-dubc1-vip60.adobe.com activate-sjc0.adobe.com hl2rcv.adobe.com lm.licenses.adobe.com na2m-pr.licenses.adobe.com ims-na1-prprod.adobelogin.com na4r.services.adobe.com na1r.services.adobe.com
陈灿豪  17:28:40
127.0.0.1     registration.parallels.com
127.0.0.1     webservices.pdfm10.parallels.com
127.0.0.1     vl.pdfm10.parallels.com
127.0.0.1     account.parallels.com
127.0.0.1     blist.parallels.com
127.0.0.1     blist.pdfm10.parallels.com
127.0.0.1     update.parallels.com
127.0.0.1     gp1.wpc.v2cdn.net
127.0.0.1     report.parallels.com
127.0.0.1     01-274b-0023.cdx.cedexis.net
127.0.0.1     c1016.glblcdn.net
127.0.0.1     wpc.051c.edgecastcdn.net
陈灿豪  20:46:22
[文件: AC2015前端技术大会讲师PPT.zip]
陳放為  15:51:28
hi
陈灿豪  15:52:05
(function(){

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

    
    
})();
