/**
 * Created by xiejk on 16-8-2.
 */
function transform(obj, value) {
    var oStyle = obj.style;
    oStyle.transform = oStyle.transform || oStyle.webkitTransform || oStyle.msTransform || oStyle.mozTransform;
    oStyle.transform = "rotate(" + value + "deg)";
}