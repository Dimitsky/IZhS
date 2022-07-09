const swiperPage = new Swiper( '.main-swiper', {
    direction: 'vertical',
    pagination: {
        el: '.main-swiper__pagination',
        bulletActiveClass: 'pagination-main-swiper__bullet--active', 
        bulletClass: 'pagination-main-swiper__bullet', 
        currentClass: 'pagination-main-swiper__bullet--current', 
        verticalClass: 'pagination-main-swiper__bullet--vertical', 
        clickable: true,
        renderBullet: function (index, className) {
            index += 1;
            index = index < 10 ? `0${index}` : `${index}`;
            return `<div class="${className}"><svg class="${className}__icon" viewBox="0 0 12 12"><use href="assets/img/defs.svg#pagination"></use></svg><span class="${className}__index">${index}</span></div>`;
        },
    },
    navigation: {
        nextEl: '.main-swiper__btn--next',
        prevEl: '.main-swiper__btn--prev',
        disabledClass: 'main-swiper__btn--disabled', 
    },
  } );