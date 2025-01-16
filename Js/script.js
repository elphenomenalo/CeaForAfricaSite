const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
},
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
});

window.addEventListener("DOMContentLoaded", ()=>{
    AOS.init({
       
        duration: 2000, 
        once: true, 
        
      });
      
})

const swiperPartenar = new Swiper('.mySwipper', {
    autoplay: {
        direction: 'Effet Fade',
        loop: true,
        delay: 3000,
},
    slidesPerView: 7,
    spaceBetween: 0,
    navigation: {
        nextEl: '.mySwipper-button-next',
        prevEl: '.mySwipper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
});


