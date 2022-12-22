
let searchbtn=document.querySelector(".search-form");
document.querySelector("#search-btn").onclick=()=>{
    searchbtn.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginbtn.classList.remove("active");
    navbar.classList.remove("active");
}

let shoppingCart=document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick=()=>{
    shoppingCart.classList.toggle("active");
    searchbtn.classList.remove("active");
    loginbtn.classList.remove("active");
    navbar.classList.remove("active");
}

let loginbtn=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick=()=>{
    loginbtn.classList.toggle("active");
    searchbtn.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
}

let navbar=document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick=()=>{
    navbar.classList.toggle("active");
    searchbtn.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginbtn.classList.remove("active");
}

Window.onscroll=()=>{
    searchbtn.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginbtn.classList.remove("active");
    navbar.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });