// ==UserScript==
// @name         Google Photos dark theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A darker look
// @author       You
// @match        https://photos.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @require https://git.io/waitForKeyElements.js
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    var retry = null;

GM_addStyle(`

/* top bar */
.QtDoYb {
  background-color: black;
}

/* background for main page & side bar */
body, .wDSX5e {
  background-color: #252525;
}

/* Font color changes */
.xA0gfb, .G7ubtf, .RLo1Hf {
  color: #dddddd;
}

` );

})();