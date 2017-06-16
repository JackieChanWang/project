
var buttons=document.querySelectorAll("content .login div");
console.log(buttons)
var rolls =document.querySelectorAll("content .login div .roll")
console.log(rolls)
var attentions=document.querySelectorAll("content .attention")
for(var i=0;i<buttons.length;i++){
    !function (i) {
        buttons[i].onclick=function () {
            for(var j=0;j<rolls.length;j++){
                rolls[j].style.display="none";
                buttons[j].style.backgroundColor="#E6E6E6";
                buttons[j].style.color="#3076A7";
                attentions[j].style.display="none"
            }
            rolls[i].style.display="block";
            buttons[i].style.backgroundColor="#3076A7"
            buttons[i].style.color="white"
            attentions[i].style.display="block"
        }
    }(i)
}
