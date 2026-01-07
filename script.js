let menu =document.querySelector('#menu-bars');
let navbar=document.querySelector(' .navbar ')

menu.onclick = ()=>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=>{

     menu.classList.remove('fa-times');
     navbar.classList.remove('active');
 
     section.forEach(sec =>{
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height){
               navLinks.forEach(links =>{
                    links.classList.remove('active');
                    document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
               });
          };

     });
}

document.querySelector('#search-icon').onclick = () =>{
     document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
     document.querySelector('#search-form').classList.remove('active');
}

// Popup notification
function showPopup() {
     const popup = document.getElementById('popup');
     popup.classList.add('show');
     setTimeout(() => popup.classList.remove('show'), 2000);
 }
 
 // Add item to cart
 function addToCart(name, price, quantity) {
     const qty = parseInt(quantity) || 1;
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
 
     const existingItem = cart.find(item => item.name === name);
     if (existingItem) {
         existingItem.quantity += qty;
     } else {
         cart.push({ name, price, quantity: qty });
     }
 
     localStorage.setItem('cart', JSON.stringify(cart));
     showPopup();
 }
 