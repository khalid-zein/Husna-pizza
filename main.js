$(document).ready(function(){
    $(".btn").click(function(){
      $(".hide").hide();
      $("#display").show();
    });
    $(".zein").click(function(){
        $("#display").hide();
        $(".hide").show();
      });
      $("#khadija").click(function(){
        $(".ordering").hide();
        $(".order-pizza").show();
      });
});

function formReset() {
    document.getElementById("myForm").reset();
 }

var order = document.getElementById("omar");

omar.addEventListener("click", function(event) {
    event.preventDefault();
    let address = document.getElementById("address").value;
    let approval = document.getElementById("jamalulleyl");
    let error = document.getElementById("error");


    if (address === ""){
       return error.innerHTML = "please enter your delivery address!";
    }else if (address){
            $(".order-pizza").hide();
            $(".ordering").show();

          approval.innerHTML = "Thank you for choosing Husna's pizza,please start your order now for it to be delivered in, " + address + ", in 30mins time with 200ksh/= additional for delivery";
   }
   error.innerHTML = "";
   formReset();


});

 function formReset() {
    document.getElementById("form").reset();
 }
 let select = document.getElementById("checkout");

 checkout.addEventListener("click", function (event){
    event.preventDefault();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    let delivery = 200;
    let total = (parseInt(size) + parseInt(crust) + parseInt(topping) + delivery) * number;
    console.log(total);

    $(".table").show();

    formReset();


 });
