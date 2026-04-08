// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-04-08
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
            const danmu = document.querySelector(".bui-danmaku-switch-input");
            const danmuON = document.querySelector(".bui-danmaku-switch-on");
            const danmuOFF = document.querySelector(".bui-danmaku-switch-off");
            if (danmuON || danmuOFF) {
                if (danmuON) {
                    danmu.click();
                    console.log("检测到弹幕开启，执行关闭");
                } else {
                    console.log("弹幕已经是关闭状态");
                }
                document.querySelector(".bpx-player-dm-root")?.remove();
                clearInterval(sleepdanmu);
            }
        };

        const sleepdanmu = setInterval(closedanmu, 600);
        closedanmu();
    }, 300);
})();