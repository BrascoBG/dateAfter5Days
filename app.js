function dateAfter5days(d,m){
    let days = Number(d);
    let month = Number(m);
    let daysInMonth = 31;

    if(days <= 31 && month <= 12){
        if(month == 2){
            daysInMonth = 28;
        }
        if(month == 4 || month == 6 || month == 9 || month == 11){
            daysInMonth = 30;
        }
        days += 5;
        if(days > daysInMonth){
            days -= daysInMonth;
            month++;
        }
        if(month > 12){
            month = 1;
        }
        if(month < 10){
            console.log(days + ".0" + month);
        }else{
            console.log(days + "." + month);
        }
    }else{
        console.log("Error! Enter real date!");
    }
    
}
dateAfter5days(30,5);