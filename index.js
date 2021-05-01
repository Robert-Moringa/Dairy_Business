var shedProduction = {
    shedA: 510, shedB : 308, shedC:486, shedD:572
}
console.log(shedProduction.shedA);

var totalProduction= function(){
    daily= shedProduction.shedA+shedProduction.shedB+shedProduction.shedC+shedProduction.shedD;
    console.log(daily);
}
totalProduction();

var incomeOverTime= function(selling_price, time){
    income=(selling_price * totalProduction) * time;
    console.log(income);
};
incomeOverTime(45,7);
incomeOverTime(45,366);

var monthlyIncome={
    jan:31*1876,
    feb:1876*29,
    mar:31*1876,
    apr:30*1876,
    may:1876*31,
    jun:30*1876,
    jul:31*1876,
    aug:30*1876,
    sept:31*1876,
    oct:30*1876,
    nov:31*1876,
    dec:30*1876,
}
console.log(monthlyIncome.dec);

