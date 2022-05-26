"use strict";

document.addEventListener('DOMContentLoaded', function () {

    // 垂直改水平
    let container = document.querySelector('.index');
    // 增加滑鼠滾輪事件
    container.addEventListener('wheel', function (e) {
        // 先停止滾輪預設行為
        e.preventDefault;
        // 利用 scrollLeft 屬性使容器向左移動，滾動距離差值(deltaY)
        container.scrollLeft += e.deltaY;
    })

    // 抓取當前時分秒
    function currentTime() {
        const date = new Date();
        document.getElementById('time').innerHTML = date.toLocaleTimeString();
    }
    setInterval(currentTime, 1000);

    // 取得天氣(串接氣象局API，Authorization後為授權碼)
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CFC71FBE-3A1B-4185-B916-CD729183112A&format=JSON')
        .then(res => {
            return res.json();
        }).then(result => {
            // 抓台北市[5]最高溫度[4]
            let taipeiT = result.records.location[5].weatherElement[4].time[0].parameter.parameterName;
            document.getElementById('weather').innerHTML = taipeiT + '°C';
        })

})