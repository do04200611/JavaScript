
function touchNumberButton(){
    $("#phoneNumber").val($("#phoneNumber").val()+this.value);
}$(document).ready(function(){
$("#btnNubmer").click(touchNumberButton);
});
