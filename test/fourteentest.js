
$(document).ready(function(){
$("button").mouseup(changeH1Red);
$("button").mousedown(changeH1Blue);
});
function changeH1Blue(){
    $("h1").css("color","skyblue");
}

function changeH1Red(){
    $("h1").css("color","red");
}