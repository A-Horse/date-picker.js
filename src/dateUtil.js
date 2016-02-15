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
