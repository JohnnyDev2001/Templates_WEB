const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

const search_icon = document.querySelector('#search-icon');
const closeit = document.querySelector('#close');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelectorAll('header .navbar a[href='+id+']').classList.add('active');
        });
      }
    });
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

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    340: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    11024: {
      slidesPerView: 3,
    },
  }
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function FadeOut(){
  setInterval(loader, 3000);
}

window.onload = FadeOut;