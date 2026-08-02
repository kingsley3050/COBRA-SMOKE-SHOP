function register(){

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let age = document.getElementById("age").value;


if(name==="" || email==="" || age===""){

alert("Please complete all fields");

return;

}


localStorage.setItem("username", name);

localStorage.setItem("email", email);

localStorage.setItem("age", age);


window.location.href="shop.html";

}





function addToCart(name, price){


let cart = JSON.parse(localStorage.getItem("cart")) || [];


cart.push({

name:name,

price:price

});


localStorage.setItem("cart", JSON.stringify(cart));


alert(name + " added to cart");


}





function readyfordelivery(name, price){
  var contactSection = document.getElementById("contact");
  if(contactSection){
    contactSection.scrollIntoView({ behavior: "smooth" });
    alert("Ready for delivery: " + name + "\nPlease contact us below.");
  } else {
    alert("Please contact us for delivery.");
  }
}


function showCart(){


let cart = JSON.parse(localStorage.getItem("cart")) || [];


let box = document.getElementById("cart-items");


let total = 0;


box.innerHTML="";


cart.forEach(item=>{


box.innerHTML += `

<div class="cart-item">

<h3>${item.name}</h3>

<p>$${item.price}</p>

</div>

`;


total += item.price;


});


document.getElementById("total").innerHTML =
"Total: $" + total;


}




function checkout(){

alert("Checkout coming soon!");

}