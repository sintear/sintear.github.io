function init(){
    var map = new AMap.Map('map', {
        center: [113.412131,23.115494],
        zoom: 10
    });
    var marker = new AMap.Marker({map: map, position: map.getCenter()});
    marker.on('click',function(e){
        marker.markOnAMAP({
            name:'广州江钰智能科技',
            position:marker.getPosition()
        })
    })
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });
    //滑动
    //监听地图的click事件，点击地图，允许鼠标滚轮缩小或放大地图
    map.setStatus({scrollWheel:false});

    AMap.plugin(["AMap.Driving"], function() {
        var drivingOption = {
            policy:AMap.DrivingPolicy.LEAST_TIME,
            map:map
        };
        var driving = new AMap.Driving(drivingOption); //构造驾车导航类
    });
//     var clickEventListener = map.on('click', function() {
//         map.setStatus({scrollWheel:true});
//     });
//     //监听地图的mouseout事件，鼠标移出地图区域，鼠标滚轮缩小或放大地图功能取消
//     var mouseOutEventListener = map.on('mouseout',function(){
//     map.setStatus({scrollWheel:false});
// });
    // AMap.service('AMap.Weather', function() {
    //     var weather = new AMap.Weather();
    //     //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
    //     weather.getLive('天河区', function(err, data) {
    //         if (!err) {
    //             var str = [];
    //             str.push('<div style="color: #3366FF;">实时天气' + '</div>');
    //             str.push('<div>城市/区：' + data.city + '</div>');
    //             str.push('<div>天气：' + data.weather + '</div>');
    //             str.push('<div>温度：' + data.temperature + '℃</div>');
    //             str.push('<div>风向：' + data.windDirection + '</div>');
    //             str.push('<div>风力：' + data.windPower + ' 级</div>');
    //             str.push('<div>空气湿度：' + data.humidity + '</div>');
    //             str.push('<div>发布时间：' + data.reportTime + '</div>');
    //             var marker = new AMap.Marker({map: map, position: map.getCenter()});
    //             var infoWin = new AMap.InfoWindow({
    //                 content: str.join(''),
    //                 offset: new AMap.Pixel(0, -20)
    //             });
    //             infoWin.open(map, marker.getPosition());
    //             marker.on('mouseover', function() {
    //                 infoWin.open(map, marker.getPosition());
    //             });
    //         }
    //     });
    //     //未来4天天气预报
    //     weather.getForecast('天河区', function(err, data) {
    //         if (err) {return;}
    //         var str = [];
    //         for (var i = 0,dayWeather; i < data.forecasts.length; i++) {
    //             dayWeather = data.forecasts[i];
    //             str.push(dayWeather.date+' <div class="weather">'+dayWeather.dayWeather+'</div> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
    //         }
    //         document.getElementById('tip').innerHTML = str.join('<br>');
    //     });
    // });
}