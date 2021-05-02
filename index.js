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
var daily=incomeOverTime(45,1);
document.getElementById("weekly").innerHTML = "Your weekly income will be Ksh. " + weekly;
document.getElementById("yearly").innerHTML = "Your yearly income will be Ksh. " +  incomeOverTime(45,366);

// monthly income
var monthlyIncome={jan:31*daily, feb:daily*29, mar:31*daily, apr:30*daily, may:daily*31, jun:30*daily, jul:31*daily, aug:30*daily, sept:31*daily, oct:30*daily, nov:31*daily, dec:30*daily}
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
document.getElementById("total1").innerHTML = incomeOverTime(45,366);

//comparison; second rate; 49.60
var incomeOverTimeNewRate= function(selling_price, time){
    income=(selling_price * total) * time;
    return income;
}
var dailyNew= parseInt(incomeOverTimeNewRate(49.6, 1));
var monthlyIncome={jan:31*dailyNew, feb:dailyNew*29, mar:31*dailyNew, apr:30*dailyNew, may:dailyNew*31, jun:30*dailyNew, jul:31*dailyNew, aug:30*dailyNew, sept:31*dailyNew, oct:30*dailyNew, nov:31*dailyNew, dec:30*dailyNew};

//comparison; Second rate; Ksh. 49.6
document.getElementById("JanN").innerHTML= monthlyIncome.jan;
document.getElementById("FebN").innerHTML= monthlyIncome.feb;
document.getElementById("MarN").innerHTML= monthlyIncome.mar;
document.getElementById("AprN").innerHTML= monthlyIncome.apr;
document.getElementById("MayN").innerHTML= monthlyIncome.may;
document.getElementById("JunN").innerHTML= monthlyIncome.jun;
document.getElementById("JulN").innerHTML= monthlyIncome.jul;
document.getElementById("AugN").innerHTML= monthlyIncome.aug;
document.getElementById("SeptN").innerHTML= monthlyIncome.sept;
document.getElementById("OctN").innerHTML= monthlyIncome.oct;
document.getElementById("NovN").innerHTML= monthlyIncome.nov;
document.getElementById("DecN").innerHTML= monthlyIncome.dec;
document.getElementById("total1N").innerHTML =parseInt(incomeOverTimeNewRate(49.6,366));

//Difference between the two rates
var rateDifference=4.6*total;
var incomeDiff={jan:31*rateDifference, feb:rateDifference*29, mar:31*rateDifference, apr:30*rateDifference, may:rateDifference*31, jun:30*rateDifference, jul:31*rateDifference, aug:30*rateDifference, sept:31*rateDifference, oct:30*rateDifference, nov:31*rateDifference, dec:30*rateDifference};

document.getElementById("JanD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("FebD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("MarD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("AprD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("MayD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("JunD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("JulD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("AugD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("SeptD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("OctD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("NovD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("DecD").innerHTML= parseInt(incomeDiff.jan);
document.getElementById("total1D").innerHTML =parseInt(incomeOverTimeNewRate(4.6,366));

