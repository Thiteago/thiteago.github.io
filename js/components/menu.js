var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
        var menu = document.getElementById('menu-hidde');
        if (veri == 1) {
            menu.style.right = "0px";
            veri = 0;
        }else{
            menu.style.right = "-100%";
            veri = 1;
        }
})

var veris = 1;
var trig = document.getElementById('menu-trigger').addEventListener("click", function(){
    var papa = document.getElementById('menu-trigger');
    if(veris ==1){
        papa.style.position = "fixed";
        papa.style.marginRight = "-18px";
        veris = 0;
    }else{
        papa.style.position = "absolute"
        veris = 1;
        papa.style.marginRight = "22px";
    }

})


document.getElementById('link').addEventListener("click", function(){
    var menu = document.getElementById('menu-hidde');
    var div = document.getElementById('menu-trigger');
    menu.style.right = "-100%";
    div.style.position ="absolute";
    div.style.marginRight = "22px";
})