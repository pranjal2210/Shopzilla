// HOME SWIPER

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: 'true',
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// BACKGROUND HEADER
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 20) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// NEW SWIPER

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 15,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: 'true',
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
   },
});

// SHOW/HIDE CART

const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

if(cartShop) {
  cartShop.addEventListener("click",()=>{
    cart.classList.add('show-cart')
  })
}

if(cartClose) {
  cartClose.addEventListener("click",()=>{
    cart.classList.remove('show-cart')
  })
}

// SHOW/HIDE LOGIN

const login = document.getElementById('login'),
    loginToggle = document.getElementById('login-toggle'),
    loginClose = document.getElementById('login-close')

if(loginToggle) {
  loginToggle.addEventListener("click",()=>{
    login.classList.add('show-login')
  })
}

if(loginClose) {
  loginClose.addEventListener("click",()=>{
    login.classList.remove('show-login')
  })
}

// SHOW/HIDE SCROLL UP

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >= 50) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// SHOW/HIDE MENU

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove('show-menu')
  })
}

// FAQ ACCORDION

const accordionItem = document.querySelectorAll('.qna-item')

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.qna-header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem !== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.qna-content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }
  else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

