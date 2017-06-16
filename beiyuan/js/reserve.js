/**
 * Created by Administrator on 2017/5/18.
 */
$.getJSON("../data/data.json", function (data) {
    console.log(data);
    var str = "";
    var str1 = "";
    var str2 = "";
    for (var i in data.jieshao) {
        for (var j in data.jieshao[i]) {
            console.log(data.jieshao[i][j])
        }
        str += "<img src='" + data.jieshao[i][j].image + "'>";
        str1 += "<h6>" + data.jieshao[i][j].title + "</h6>";
        str2 += "<p>" + data.jieshao[i][j].content + "</p>";
    }
    $("#banner").html(str);
    $("#data").append(str1);
    $("#data").append(str2);
})