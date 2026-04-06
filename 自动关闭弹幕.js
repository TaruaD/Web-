// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-04-06
// @description  try to take over the world!
// @author       You
// @match        *://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(() => {
        const closedanmu = () => {
            const danmu = document.querySelector(".bui-danmaku-switch-input")
            const danmuon = document.querySelector(".bui-danmaku-switch-on")
            if (danmuon) {
                danmu.click()
                console.log("关闭弹幕")
                clearInterval(sleepdanmu)
            }
        }
        const sleepdanmu = setInterval(closedanmu, 600)
        closedanmu()
    }, 300)
})();