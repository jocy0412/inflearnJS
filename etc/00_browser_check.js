/* Android Version Check */
var name="pcid", start, end, pcid = "", isAndroidApp;
if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "=");
    if (start != -1) {
        start = start + name.length + 1;
        end = document.cookie.indexOf(";", start);
        if (end == -1) end = document.cookie.length;

        pcid = unescape(document.cookie.substring(start, end));
    }
}
isAndroidApp = (pcid.substr(0, 1) == "3");
/* ios Version Check */
var ua = navigator.userAgent.toLowerCase();
var iosIndex = ua.indexOf('ios');
var isIphoneApp = (iosIndex != -1);

/* Root */
var myroot = $('.section__event-csr');
if(isAndroidApp || isIphoneApp){
    if (navigator.userAgent.match('CriOS')) {
        myroot.addClass("web_view");
    } else {
        myroot.addClass("app_view");
    }
} else {
    myroot.addClass("web_view");
}