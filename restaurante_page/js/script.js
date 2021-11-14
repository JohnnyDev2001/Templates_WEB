const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

const search_icon = document.querySelector('#search-icon');
const closeit = document.querySelector('#close');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

search_icon.onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

closeit.onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });