$(document).ready(function(){
    $(".btn").click(function(){
      $(".hide").hide();
      $("#display").show();
    });
    $(".zein").click(function(){
        $("#display").hide();
        $(".hide").show();
      });
});
