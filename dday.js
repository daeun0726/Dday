var now = new Date();
var firstDay = new Date("2022-06-01");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector("#accent").innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
var future = toFirst + days*(1000*60*60*24);
var someDay = new Date(future);
var year = someDay.getFullYear();
var month = someDay.getMonth()+1;
var date = someDay.getDate();
document.querySelector("#date"+days).innerText = year+"년"+month+"월"+date+"일";
}