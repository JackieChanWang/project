/**
 * Created by Administrator on 2017/5/18.
 */
$.getJSON("../data/data.json", function (data) {
    console.log(data.tingche.inform);
    var str = "<div id='data'>";
    $.each(data.tingche.inform, function (i, obj) {
        console.log(obj);
        str += "<div><p>" + obj.title + "</p><span>" + obj.con + "</span></div>";
    });
    str += "</div>";
    $("#content").append(str);
});