// ==UserScript==
// @name         Google Photos dark theme
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  A darker look
// @author       You
// @match        https://photos.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function addInitialStyle() {
        GM_addStyle(`
            /* top bar */
            .QtDoYb {
            background-color: black;
            }

            /* background for main page & side bar */
            body, .wDSX5e {
            background-color: #252525;
            }
        `);
    }

    function addStyle() {

        GM_addStyle(`
            /* top bar */
            .QtDoYb {
            background-color: black;
            }

            /* background for main page & side bar */
            body, .wDSX5e {
            background-color: #252525;
            }

            /* Main page font color */
            .xA0gfb, .G7ubtf, .RLo1Hf {
            color: #dddddd;
            }

            /* background color on search page */
            c-wiz.B6Rt6d.zcLWac.eejsDc.G9Yhnf, div.eReC4e.FbgB9 {
            background-color: #252525;
            }

            /* font color on search page */
            div.ZEmz6b, h2.ZEmz6b, .OgirMe, .hsohWb, div.hsohWb, .ApP0z, div.dykGZb, div.avzd9e, div.R1QzSc.ecU3Ec > div {
            color: #dddddd;
            }

            /* View all link on search page */
            div.dykGZb span {
                color: #dfdfdf;
            }

            /* Text color on sharing page */
            div.I7yCae, div.DNAsC.A1fzDc.bSAKfb a {
                color: #dfdfdf;
            }

            a.DOAbib:hover {
            background-color: yellow;
            }

            /* Album page styles */
            div.gN5aAe {
            background-color: #252525;
            }

            div.mfQCMe, div.UV4Xae {
            color: #dddddd;
            }
        ` );
    }

    var oldHref = document.location.href;

    window.onload = function() {

        var
             bodyList = document.querySelector("body")

            ,observer = new MutationObserver(function(mutations) {

                mutations.forEach(function(mutation) {

                    if (oldHref != document.location.href) {

                        oldHref = document.location.href;

                        /* Changed ! your code here */
                        setTimeout(addStyle, 250);

                    }

                });

            });

        var config = {
            childList: true,
            subtree: true
        };

        observer.observe(bodyList, config);

    };

    // Attach initial background colors to get a dark mode at initial load
    addInitialStyle();

    // finally once the page is loaded, apply the full dark style
    window.onload = function() { addStyle(); }

})();
