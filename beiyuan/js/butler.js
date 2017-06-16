/**
 * Created by Administrator on 2017/5/18.
 */

$.getJSON("../data/data.json", function (data) {
    console.log(data.guanjia);
    var str = "<img src='../img/" + data.guanjia.pic + "'>";
    $(".banner").html(str);

    console.log(data.guanjia.inform);

    var str = "";
    $.each(data.guanjia.inform, function (i, obj) {
        console.log(obj);
        str += "<div class='jump'><a href='" + obj.src + ".html'>" + obj.title + "</a></div>";
    });
//        str += "</div>";
    $(".business").append(str);

    console.log($(".jump"));

    //点击单个内容跳转至相应页面
    $(".jump").eq(0).click(function () {
        console.log("sdddd");
        window.location.href = "service.html";
    })

    $(".jump").eq(1).click(function () {
        console.log("sdddd");
        window.location.href = "dianfei.html";
    })
    $(".jump").eq(2).click(function () {
        console.log("sdddd");
        window.location.href = "dianfei.html";
    })

});