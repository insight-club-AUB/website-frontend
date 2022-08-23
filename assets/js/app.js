
$(document).ready(function(){
    $("#anniversary_img").click( function () {
        $("#anniversaryModal").modal();
    });
});


var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "assets/img/darkwhitemode/sun.png";
    
    }else {
        icon.src = "assets/img/darkwhitemode/moon.png";
    }
}
