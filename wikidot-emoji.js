// ==UserScript==
// @name         Wikidot-Emoji
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Put some emoji on the textarea.
// @author       HelloOSMe
// @match        http://*.wikidot.com/*
// @match        https://*.wikidot.com/*
// @grant        none
// ==/UserScript==
function show(){
    var a=document.getElementById('np-editor-panel'),b=document.createElement('div');
    var c="<ul>";
    for(var i=0;i<29;i++){
        if(i>9){
            c+="<li><a style=\"background:#444!important;margin:1px;border:#777 solid 1px;\" href=\"javascript:;\" onclick=\"$j('textarea').val($j('textarea').val()+'[[image http://图.tk/"+String.fromCharCode(i+97-10)+"]]');\"><img alt=\"\" width=\"22px\" src=\"http://图.tk/"+String.fromCharCode(i+97-10)+"\"/></a></il>";
        }else{
            c+="<li><a style=\"background:#444!important;margin:1px;border:#777 solid 1px;\" href=\"javascript:;\" onclick=\"$j('textarea').val($j('textarea').val()+'[[image http://图.tk/"+String.fromCharCode(i+48)+"]]');\"><img alt=\"\" width=\"22px\" src=\"http://图.tk/"+String.fromCharCode(i+48)+"\"/></a></il>";
        }
    }
    c+="</ul>";
    b.innerHTML=c;
    a.appendChild(b);
}
(function() {
    'use strict';
    setTimeout(()=>show(), 1000);
})();
