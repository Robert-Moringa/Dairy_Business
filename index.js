// sheds production
var shedProduction = {
    shedA: 510, shedB : 308, shedC:486, shedD:572
};
document.getElementById("shedA").innerHTML = "Your produduction in shed A is " + shedProduction.shedA + " litres per day.";
document.getElementById("shedB").innerHTML = "Your produduction in shed B is " + shedProduction.shedB + " litres per day.";
document.getElementById("shedC").innerHTML = "Your produduction in shed C is " + shedProduction.shedC + " litres per day.";
document.getElementById("shedD").innerHTML = "Your produduction in shed D is " + shedProduction.shedD + " litres per day.";

// daily total production
let totalProduction= function(){
    daily= shedProduction.shedA+shedProduction.shedB+shedProduction.shedC+shedProduction.shedD;
    return daily;
}
var total= totalProduction();
document.getElementById("totalprod").innerHTML = "Your total produduction in all sheds is " + total + " litres per day.";

// weekly and yearly income
var incomeOverTime= function(selling_price, time){
    income=(selling_price * total) * time;
    return income;
};
let weekly = incomeOverTime(45,7);
document.getElementById("weekly").innerHTML = "Your weekly income will be Ksh " + weekly;
document.getElementById("yearly").innerHTML = "Your yearly income will be Ksh " +  incomeOverTime(45,366);


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
document.getElementById("jan").innerHTML= "Your income for January is Ksh. " + mothlyIncome.jan;
document.getElementById("feb").innerHTML= "Your income for February is Ksh. " + mothlyIncome.feb;
document.getElementById("mar").innerHTML= "Your income for March is Ksh. " + mothlyIncome.mar;
document.getElementById("apr").innerHTML= "Your income for April is Ksh. " + mothlyIncome.apr;
document.getElementById("may").innerHTML= "Your income for May is Ksh. " + mothlyIncome.may;
document.getElementById("jun").innerHTML= "Your income for June is Ksh. " + mothlyIncome.jun;
document.getElementById("jul").innerHTML= "Your income for July is Ksh. " + mothlyIncome.jul;
document.getElementById("aug").innerHTML= "Your income for August is Ksh. " + mothlyIncome.aug;
document.getElementById("sept").innerHTML= "Your income for September is Ksh. " + mothlyIncome.sept;
document.getElementById("oct").innerHTML= "Your income for October is Ksh. " + mothlyIncome.oct;
document.getElementById("nov").innerHTML= "Your income for November is Ksh. " + mothlyIncome.nov;
document.getElementById("dec").innerHTML= "Your income for December is Ksh. " + mothlyIncome.dec;

