"use strict";

document.addEventListener('DOMContentLoaded', function () {

    let container = document.querySelector('.index');
    // 增加滑鼠滾輪事件
    container.addEventListener('wheel', function (e) {
        // 先停止滾輪預設行為
        e.preventDefault;
        // 利用 scrollLeft 屬性使容器向左移動，滾動距離差值(deltaY)
        container.scrollLeft += e.deltaY;
    })

})