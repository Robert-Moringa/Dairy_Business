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
    january:( 31 * totalProduction() ),
    february:totalProduction()*29,
    march:31*totalProduction(),
    april:30*totalProduction(),
    may:totalProduction()*31,
    june:30*totalProduction(),
    july:31*totalProduction(),
    august:30*totalProduction(),
    sept:31*totalProduction(),
    oct:30*totalProduction(),
    nov:31*totalProduction(),
    dec:30*totalProduction(),
}
console.log(monthlyIncome.dec);

