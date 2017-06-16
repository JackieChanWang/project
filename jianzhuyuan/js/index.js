
var divs=document.querySelectorAll("content .text");
var buttons=document.querySelectorAll("content .zhuce div");
console.log(buttons)
for(var i=0;i<buttons.length;i++){
    !function (i) {
        buttons[i].onclick=function () {
            for(var j=0;j<divs.length;j++){
                divs[j].style.display="none";
                buttons[j].style.backgroundColor="#E6E6E6";
                buttons[j].style.color="#3076A7"
            }
            divs[i].style.display="block";
            buttons[i].style.backgroundColor="#3076A7"
            buttons[i].style.color="white"
        }
    }(i)
}
