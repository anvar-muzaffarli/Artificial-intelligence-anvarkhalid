// DOM Document Object Model

// null
document.querySelector('.fa-xmark').addEventListener('click', function (){
    document.querySelector('.curtain-navbar').style.width="0"
}  )


document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.curtain-navbar').style.width="100%"
})



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
   
  });
