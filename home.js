const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    

    autoplay: {
        delay: 5000, //muda a imagem a cada 3 segundos
        disableOnInteraction: false // permite que o usuario retome ou passe o slid
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
})




