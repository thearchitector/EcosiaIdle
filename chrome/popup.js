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
(function(){document.getElementById("footer").src=chrome.runtime.getURL(.5<=Math.random()?"footer.png":"footer2.png");var a=new XMLHttpRequest;a.open("GET","https://www.ecosia.org/search?addon=chrome&addonversion=2.0.3&q=Mango",!0);a.onreadystatechange=function(a){if(4==this.readyState&&200==this.status){a=document.createElement("html");a.innerHTML=this.responseText;var b=a.getElementsByClassName("pill-text tree-counter-text js-treecount-text")[0].innerHTML.replace(/\D/gm,"");chrome.storage.sync.set({treecount:b},function(){chrome.browserAction.setBadgeText({text:b});document.getElementById("trees").innerHTML=b})}};a.send();document.getElementById("search").addEventListener("click",function(){chrome.tabs.create({url:"https://www.ecosia.org/"})},!1)})();