/**
 * Created by Administrator on 2017/5/18.
 */
$.getJSON("../data/data.json", function (data) {
    console.log(data.result)
    var str = "<div id='data'>";
    $.each(data.result.inform, function (i, obj) {
        console.log(obj);
        str += "<div><p>" + obj.title + "</p><span>" + obj.con + "</span></div>";
    });
    str += "</div>";
    $("footer").append(str);
    /*var times = new Date();
    var today = times.getDay();
    console.log(today);
    var a;
    if (today == 1) {
        a = "Monday"
    } else if (today == 2) {
        a = "Tuesday"
    } else if (today == 3) {
        a = "Wednesday"
    } else if (today == 4) {
        a = "Thursday"
    } else if (today == 5) {
        a = "Firday"
    } else {
        a = "Monday"
    }
    var str1 = "";
    for (var i in data.caidan[a]) {
        str1 += "<tr><td>" + data.caidan[a][i].name + "</td><td>" + data.caidan[a][i].money + "</td></tr>"
    }
    $("table").html(str1)*/

});