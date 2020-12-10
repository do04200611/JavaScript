
    $(document).ready(function(){

      $("#save").click(function(num){
        $("#total").val((Math.floor(Math.random()*100000)+1)
        .toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }));
      });
      $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight,#nine,#zeroone").click(function(){
if($("#test").val() == "Tel") $("#test").val("");
$("#test").val($("#test").val()+$(this).text());

         $("#clear").click(function(){
         $("#test").val("");
       });
       $("#add").click(function(){
         $("#test").val("저장되었습니다");
       });
       $("#delete").click(function(){
         let str = $("#test").val().substring(1, $("#test").val().length-1);
     $("#test").val(str);
       });

});
    });
    //c출처 :http://magic.wickedmiso.com/61
    
