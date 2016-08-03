/**
 * Created by xiejk on 16-7-30.
 */

var oNumber = document.querySelector("#time");
var oDivs = oNumber.querySelectorAll("div");
var oSpans = oNumber.querySelectorAll("span");
var hourPointer = document.querySelector("#hour-pointer");
var minutePointer = document.querySelector("#minute-pointer");
var secondPointer = document.querySelector("#second-pointer");
var time;
var i = 0;
for (i = 0; i < oDivs.length; i++) {
    transform(oDivs[i], i*30);
}
for (i = 0; i < oSpans.length; i++) {
    transform(oSpans[i], i*-30);
}

function tick() {
    time = new Date();
    var nowHour = time.getHours();
    var nowMinute = time.getMinutes();
    var nowSecond = time.getSeconds();
    transform(hourPointer, nowHour%12*30+nowMinute/60*30);
    transform(minutePointer, nowMinute*6+nowSecond/60*6);
    transform(secondPointer, nowSecond*6);
}

window.requestAnimationFrame(tick);




