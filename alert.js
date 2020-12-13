$(document).ready(function(){

     $("#save").click(function(num){
       $("#total").val((Math.floor(Math.random()*100000)+1)
       .toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }));
     });
     $(".btnNum").click(function(){
if($("#test").val() == "Tel") $("#test").val("");
$("#test").val($("#test").val()+$(this).text());

        $("#clear").click(function(){
        $("#test").val("");
      });
      $("#add").click(function(){
        var copyText = document.getElementById("test");
            copyText.select();
            document.execCommand("copy");
            alert("전화 번호 "+ copyText.value+"번은 저장되었습니다~^^");
      });
      $("#delete").click(function(){
        let str = $("#test").val().substring(1, $("#test").val().length-1);
    $("#test").val(str);
      });
});
$(function() {
        $("#now").text(new Date());
          setInterval(function() {
              $("#now").text(new Date());
          }, 1000);
      });
   });
   //c출처 :http://magic.wickedmiso.com/61
