/**
 * Created by xiejk on 16-7-30.
 */

var oNumber = document.querySelector("#time");
var oDivs = oNumber.querySelectorAll("div");
var oSpans = oNumber.querySelectorAll("span");
var i = 0;
for (i = 0; i < oDivs.length; i++) {
    oDivs[i].style.webkitTransform = "rotate("+ i*30 + "deg)";
}
for (i = 0; i < oSpans.length; i++) {
    oSpans[i].style.webkitTransform = "rotate(" + i*-30 +"deg)";
}