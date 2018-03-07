/*
    MIT License

    Copyright (c) 2017-2018 Elias Gabriel

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
chrome.browserAction.setBadgeBackgroundColor({color:"#438DE0"});chrome.tabs.onUpdated.addListener(function(a,b,c){"complete"==b.status&&(a=c.url.replace("#","&").replace("?","&"),b=a.startsWith("https://www.google.com/")||a.startsWith("https://www.bing.com/")||a.startsWith("https://duckduckgo.com/"),c=a.startsWith("https://search.yahoo.com/"),(b||c)&&-1!=a.indexOf(b?"&q=":"&p=")&&(b=a.indexOf(b?"&q=":"&p=")+3,c=-1!=a.indexOf("&",b)?a.indexOf("&",b):a.length,a=a.substring(b,c),e(a)))});function e(a){var b=new XMLHttpRequest;b.open("GET","https://www.ecosia.org/search?addon=eidle&addonversion=1.1.0&q="+a,!0);b.onreadystatechange=function(a){if(4==this.readyState&&200==this.status){a=document.createElement("html");a.innerHTML=this.responseText;var b=a.getElementsByClassName("pill-text tree-counter-text js-treecount-text")[0].innerHTML.replace(/\D/gm,"");a=a.getElementsByClassName("result-title result-title-ad");chrome.storage.sync.set({i:b},function(){chrome.browserAction.setBadgeText({text:b})});for(var c=0;c<a.length;c++){var d=new XMLHttpRequest;d.open("GET",a[c].href,!0);d.send()}}};b.send()};