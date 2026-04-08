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
        const statusBar = document.querySelector(".bpx-player-dm-root")
        statusBar.remove()
        const closedanmu = () => {
            const danmu = document.querySelector(".bui-danmaku-switch-input")
            const danmuON = document.querySelector(".bui-danmaku-switch-on")
            const danmuOFF = document.querySelector(".bui-danmaku-switch-off")
            if (danmuON) {
                danmu.click()
                console.log("关闭弹幕")
                clearInterval(sleepdanmu)
            }
            if (danmuON) {
                console.log("弹幕已关闭")
            }
        }

        const sleepdanmu = setInterval(closedanmu, 600)
        closedanmu()
    }, 300)
})();