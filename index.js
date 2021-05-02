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
document.getElementById("weekly").innerHTML = "Your weekly income will be Ksh. " + weekly;
document.getElementById("yearly").innerHTML = "Your yearly income will be Ksh. " +  incomeOverTime(45,366);

// monthly income
var monthlyIncome={jan:31*total, feb:total*29, mar:31*total, apr:30*total, may:1876*31, jun:30*1876, jul:31*1876, aug:30*1876, sept:31*1876, oct:30*1876, nov:31*1876, dec:30*1876}
document.getElementById("jan").innerHTML= "Your income for January is Ksh. " + monthlyIncome.jan;
document.getElementById("feb").innerHTML= "Your income for February is Ksh. " + monthlyIncome.feb;
document.getElementById("mar").innerHTML= "Your income for March is Ksh. " + monthlyIncome.mar;
document.getElementById("apr").innerHTML= "Your income for April is Ksh. " + monthlyIncome.apr;
document.getElementById("may").innerHTML= "Your income for May is Ksh. " + monthlyIncome.may;
document.getElementById("jun").innerHTML= "Your income for June is Ksh. " + monthlyIncome.jun;
document.getElementById("jul").innerHTML= "Your income for July is Ksh. " + monthlyIncome.jul;
document.getElementById("aug").innerHTML= "Your income for August is Ksh. " + monthlyIncome.aug;
document.getElementById("sept").innerHTML= "Your income for September is Ksh. " + monthlyIncome.sept;
document.getElementById("oct").innerHTML= "Your income for October is Ksh. " + monthlyIncome.oct;
document.getElementById("nov").innerHTML= "Your income for November is Ksh. " + monthlyIncome.nov;
document.getElementById("dec").innerHTML= "Your income for December is Ksh. " + monthlyIncome.dec;

//comparison; first rate; Ksh. 45
document.getElementById("Jan").innerHTML= monthlyIncome.jan;
document.getElementById("Feb").innerHTML= monthlyIncome.feb;
document.getElementById("Mar").innerHTML= monthlyIncome.mar;
document.getElementById("Apr").innerHTML= monthlyIncome.apr;
document.getElementById("May").innerHTML= monthlyIncome.may;
document.getElementById("Jun").innerHTML= monthlyIncome.jun;
document.getElementById("Jul").innerHTML= monthlyIncome.jul;
document.getElementById("Aug").innerHTML= monthlyIncome.aug;
document.getElementById("Sept").innerHTML= monthlyIncome.sept;
document.getElementById("Oct").innerHTML= monthlyIncome.oct;
document.getElementById("Nov").innerHTML= monthlyIncome.nov;
document.getElementById("Dec").innerHTML= monthlyIncome.dec;
