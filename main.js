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

var order = document.getElementById("omar");

omar.addEventListener("click", function(event) {
    event.preventDefault();
    var address = document.getElementById("address").value;
    var approval = document.getElementById("jamalulleyl");

    if (address === ""){
        alert("please enter your delivery address!");
    }else if (address){
            $(".order-pizza").hide();
            $(".ordering").show();

          approval.innerHTML = "Thank you for choosing Husna's pizza,please start your order now for it to be delivered in, " + address + ", in 30mins time";
   }

});
