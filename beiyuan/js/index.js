/**
 * Created by Administrator on 2017/5/18.
 */
/*var width = screen.width;
 var ul = $(".ul");
 var len = $(".ul li").length;
 index = 0;*/

/*document.addEventListener("touchmove", function (ev) {
 ev.preventDefault()
 })*/
/*ul.swipeLeft(function () {
 index++;
 if (index == len) {
 index--
 }
 ul.css("transform", "translateX(-" + width * index + "px)");
 $(".ol li").eq(index).css("backgroundColor", "red").siblings().css("backgroundColor", "#fff")
 })
 ul.swipeRight(function () {
 index--;
 if (index == len) {
 index++
 }
 ul.css("transform", "translateX(-" + width * index + "px)");
 $(".ol li").eq(index).css("backgroundColor", "red").siblings().css("backgroundColor", "#fff")
 });*/


/*$.getJSON("../data/data.json", function (data) {
 console.log(data.banner);

 //资讯
 var str = "";
 for (var i in data.zixun) {
 //                console.log(data.zixun[i])
 for (var j in data.zixun[i]) {
 //                    console.log(data.zixun[i][j])
 }
 str += "<img src='" + data.zixun[i][j].image + "'><div class='summary'><h2>" + data.zixun[i][j].title + "</h2><p>" + data.zixun[i][j].content + "</p></div>"
 }
 $(".content").append(str)
 });*/
/*
 $(function () {
 var contentUrl = 'http://101.200.35.33:8086/byxzl-proxy/';
 var sign = $.md5('type=10A&key=z3vDWPT2T1atzP2N').toUpperCase();
 //            console.log(sign);
 $.ajax({
 url: contentUrl + 'carouselFigure.app',
 data: {
 type: "10C",
 sign: sign
 },
 success: function (data) {
 console.log(data)
 var str = ''
 console.log(data.data)
 for (var i in data.data) {
 console.log(data.data[i].imgUrl)
 str += '<li><img src="' + data.data[i].imgUrl + '"></li>'
 }
 $(".ul").html(str);

 var width = screen.width;
 var ul = $(".ul");
 console.log(ul)
 var len = $(".ul li").length;
 var index = 0;
 ul.swipeLeft(function () {
 index++;
 if (index == len) {
 index--
 }
 ul.css("transform", "translateX(-" + width * index + "px)");
 $(".ol li").eq(index).css("backgroundColor", "red").siblings().css("backgroundColor", "#fff")
 })
 ul.swipeRight(function () {
 index--;
 if (index == len) {
 index++
 }
 ul.css("transform", "translateX(-" + width * index + "px)");
 $(".ol li").eq(index).css("backgroundColor", "red").siblings().css("backgroundColor", "#fff")
 })
 }
 })
 });*/


/*$('.ul').on('touchmove', function (ev) {
    ev.preventDefault();
}, {passive: false});
var ul = $('.ul'),
    len = $('.ul li').length,
    width = screen.width,
    index = 0,
    li = $('ol>li');
// oul.swipeLeft(function () {
//     index++;
//     if(index==3){
//         index--;
//     }
//     go()
// });
// oul.swipeRight(function () {
//     index--;
//     if(index<0){
//         index = 0;
//     }
//     go()
// })
setInterval(function () {
    index++;
    console.log(index)
    //go()
    ul.css('transform', 'translateX(-' + index * width + 'px)');
    li.css('backgroundColor', '#fff');
    li.eq(index).css('backgroundColor', 'red');
    if (index == len-1) {
        index = -1;
    }
}, 2000)*/
/*
function go() {
    ul.css('transform', 'translateX(-' + index * width + 'px)');
    li.css('backgroundColor', '#fff');
    li.eq(index).css('backgroundColor', 'red');
}*/
