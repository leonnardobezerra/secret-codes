var smessage = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";

function disable_hot_keys(e) {
    var t;
    if (window.event) t = window.event.keyCode;
    else t = e.which;
    if (t == 123) {
        show_wccp_pro_message("Não é permitido imprimir nem salvar esta página.");
        return false
    }
    var s = e.target.tagName;
    s = s.toUpperCase();
    if (s == "TEXT" || s == "TEXTAREA" || s == "INPUT" || s == "PASSWORD" || s == "SELECT") {
        s = "TEXT"
    }
    if (e.ctrlKey) {
        var a;
        if (window.event) a = window.event.keyCode;
        else a = e.which;
        if (s != "TEXT" && (a == 97 || a == 65 || a == 67 || a == 99 || a == 88 || a == 120 || a == 26 || a == 85 || a == 86 || a == 43)) {
            show_wccp_pro_message("<b>Alerta:&nbsp;</b> Código fonte protegido.");
            return false
        }
        var r = "checked";
        if (a == 83 && r == "checked") {
            show_wccp_pro_message("Não é permitido imprimir nem salvar esta página.");
            return false
        }
        var o = "checked";
        if (a == 80 && o == "checked") {
            show_wccp_pro_message("Não é permitido imprimir nem salvar esta página.");
            return false
        } else return true
    }
}

"use strict";

document.addEventListener("keydown", function(e) {
    if (e.shiftKey) {
        e = e || window.event;
        if (e.stopPropagation) e.stopPropagation();
        e.cancelBubble = true;
        return false
    }
});

function disable_copy(e) {
    var t = "" + "";
    var s = "";
    s = e.target.className;
    if (s != "" && t.includes(s)) {
        target.style.cursor = "text";
        return true
    }
    var a = 0;
    var r = e ? e : window.event;
    if (parseInt(navigator.appVersion) > 3) {
        if (document.layers && navigator.appName == "Netscape") a = r.modifiers-0 > 3;
        else a = r.shiftKey;
        if (a) {
            if (smessage !== "") show_wccp_pro_message(smessage);
            var o = typeof InstallTrigger !== "undefined";
            if (o) {
                alert(smessage)
            }
            return false
        }
    }
    if (e.which === 2) {
        var n = e == null ? event.srcElement.tagName : e.target.tagName;
        show_wccp_pro_message(smessage);
        return false
    }
    var i = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    var c = e.target.nodeName;
    c = c.toUpperCase();
    var l = "";
    if (c == "IMG" && l == "checked" && e.detail == 2) {
        show_wccp_pro_message(alertMsg_IMG);
        return false
    }
    if (c != "TEXT" && c != "TEXTAREA" && c != "INPUT" && c != "PASSWORD" && c != "SELECT" && c != "EMBED") {
        if (smessage !== "" && e.detail == 2) show_wccp_pro_message(smessage);
        if (i) return true;
        else return false
    }
}

function disable_copy_ie() {
    var t = "" + "";
    var s = "";
    s = e.target.className;
    if (s != "" && t.includes(s)) {
        target.style.cursor = "text";
        return true
    }
    var a = window.event.srcElement.nodeName;
    a = a.toUpperCase();
    if (a == "IMG") {
        show_wccp_pro_message(alertMsg_IMG);
        return false
    }
    if (a != "TEXT" && a != "TEXTAREA" && a != "INPUT" && a != "PASSWORD" && a != "SELECT" && a != "OPTION" && a != "EMBED") {
        return false
    }
}

function reEnable() {
    return true
}

document.onkeydown = disable_hot_keys;
document.onselectstart = disable_copy_ie;
if (navigator.userAgent.indexOf("MSIE") == -1) {
    document.onmousedown = disable_copy;
    document.onclick = reEnable
}

function disableSelection(e) {
    if (typeof e.onselectstart != "undefined") e.onselectstart = disable_copy_ie;
    else if (typeof e.style.MozUserSelect != "undefined") {
        e.style.MozUserSelect = "none"
    } else e.onmousedown = function() {
        return false
    };
    e.style.cursor = "default"
}

window.onload = function() {
    disableSelection(document.body)
};

window.addEventListener("keyup", dealWithPrintScrKey, false);

function dealWithPrintScrKey(e) {
    var t = e.keyCode || e.charCode;
    if (t == 44) {
        document.getElementById("prntscr_disable_field").className = "showme";
        var d = document.querySelector("#prntscr_disable_field");
        d.select();
        document.execCommand("Copy");
        var a = document.querySelector("#prntscr_disable_field");
        var c = document.createRange();
        c.selectNode(a);
        window.getSelection().addRange(c);
        document.execCommand("copy");
        document.getElementById("prntscr_disable_field").className = "hideme";
        show_wccp_pro_message("Não é permitido imprimir nem salvar esta página.")
    }
}

document.ondragstart = function() {
    return false
};

function nocontext(e) {
    var s = "" + "";
    var r = "";
    r = e.target.className;
    if (r != "" && s.includes(r)) {
        target.style.cursor = "text";
        return true
    }
    var t = "NOTAG,";
    var a = e == null ? event.srcElement.tagName : e.target.tagName;
    var l = "";
    if ((a == "IMG" || a == "PROTECTEDIMGDIV") && l == "checked") {
        if (alertMsg_IMG != "") show_wccp_pro_message(alertMsg_IMG);
        return false
    } else {
        t = t + "IMG,"
    }
    l = "";
    if ((a == "VIDEO" || a == "EMBED") && l == "checked") {
        if (alertMsg_VIDEO != "") show_wccp_pro_message(alertMsg_VIDEO);
        return false
    } else {
        t = t + "VIDEO,EMBED,"
    }
    l = "";
    if ((a == "A" || a == "TIME") && l == "checked") {
        if (alertMsg_A != "") show_wccp_pro_message(alertMsg_A);
        return false
    } else {
        t = t + "A,"
    }
    l = "";
    if ((a == "P" || a == "B" || a == "FONT" || a == "LI" || a == "UL" || a == "STRONG" || a == "OL" || a == "BLOCKQUOTE" || a == "TD" || a == "SPAN" || a == "EM" || a == "SMALL" || a == "I" || a == "BUTTON") && l == "checked") {
        if (alertMsg_PB != "") show_wccp_pro_message(alertMsg_PB);
        return false
    } else {
        t = t + "P,B,FONT,LI,UL,STRONG,OL,BLOCKQUOTE,TD,SPAN,EM,SMALL,I,BUTTON,"
    }
    l = "";
    if ((a == "INPUT" || a == "PASSWORD") && l == "checked") {
        if (alertMsg_INPUT != "") show_wccp_pro_message(alertMsg_INPUT);
        return false
    } else {
        t = t + "INPUT,PASSWORD,"
    }
    l = "";
    if ((a == "H1" || a == "H2" || a == "H3" || a == "H4" || a == "H5" || a == "H6" || a == "ASIDE" || a == "NAV") && l == "checked") {
        if (alertMsg_H != "") show_wccp_pro_message(alertMsg_H);
        return false
    } else {
        t = t + "H1,H2,H3,H4,H5,H6,"
    }
    l = "";
    if (a == "TEXTAREA" && l == "checked") {
        if (alertMsg_TEXTAREA != "") show_wccp_pro_message(alertMsg_TEXTAREA);
        return false
    } else {
        t = t + "TEXTAREA,"
    }
    l = "";
    if ((a == "DIV" || a == "BODY" || a == "HTML" || a == "ARTICLE" || a == "SECTION" || a == "NAV" || a == "HEADER" || a == "FOOTER") && l == "checked") {
        if (alertMsg_EmptySpaces != "") show_wccp_pro_message(alertMsg_EmptySpaces);
        return false
    } else {
        if (t.indexOf(a) != -1) {
            return true
        } else return false
    }
}
var alertMsg_IMG = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_A = "<b>Alerta:&nbsp;</b> Link Protegido!";
var alertMsg_PB = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_INPUT = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_H = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_TEXTAREA = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_EmptySpaces = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
var alertMsg_VIDEO = "<b>Alerta:&nbsp;</b> Conteúdo Protegido!";
document.oncontextmenu = nocontext;

var e = document.getElementsByTagName('body')[0];
if (e) {
    e.setAttribute('unselectable', 'on');
}

var timeout_result;
function show_wccp_pro_message(e) {
    timeout = 3 * 1e3;
    if (e !== "" && timeout != 0) {
        var t = e;
        jquery_fadeTo();
        document.getElementById("wpcp-error-message").innerHTML = t;
        document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme ";
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, timeout)
    } else {
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, timeout)
    }
}

function hide_message() {
    jquery_fadeOut();
    document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme"
}

function jquery_fadeTo() {
    try { jQuery("#wccp_pro_mask ").fadeTo("slow", .3) } catch (e) { }
}

function jquery_fadeOut() {
    try { jQuery("#wccp_pro_mask").fadeOut("slow") } catch (e) { }
}



function click(oEvent) {
if (event.button==0 && oEvent.ctrlKey==true)
 {show_wccp_pro_message("<b>Alerta:&nbsp;</b> Conteúdo Protegido!");
        return false}
if (event.button==2 || event.button==1) 
 {show_wccp_pro_message("<b>Alerta:&nbsp;</b> Conteúdo Protegido!");
        return false}
}

document.onmousedown=click;
document.oncontextmenu = click;
