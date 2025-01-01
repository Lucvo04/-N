let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let seaechForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    seaechForm.classList.toggle('active');
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}