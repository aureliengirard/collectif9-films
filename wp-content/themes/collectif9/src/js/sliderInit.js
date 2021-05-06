const sliderInit = function() {

    var arrow_icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 170.2 165.4" xml:space="preserve"><path d="M87.5,165.4c-1.9,0-3.8-0.7-5.3-2.2c-2.9-2.9-2.9-7.7,0-10.6l69.9-69.9L82.2,12.8c-2.9-2.9-2.9-7.7,0-10.6 c2.9-2.9,7.7-2.9,10.6,0L168,77.4c2.9,2.9,2.9,7.7,0,10.6l-75.2,75.2C91.3,164.7,89.4,165.4,87.5,165.4z"/><path d="M7.5,165.4c-1.9,0-3.8-0.7-5.3-2.2c-2.9-2.9-2.9-7.7,0-10.6l69.9-69.9L2.2,12.8c-2.9-2.9-2.9-7.7,0-10.6 c2.9-2.9,7.7-2.9,10.6,0L88,77.4C91,80.3,91,85.1,88,88l-75.2,75.2C11.3,164.7,9.4,165.4,7.5,165.4z"/></svg>';
    var arrow_prev = '<div class="slick--prev">' + arrow_icon + '</div>';
    var arrow_next = '<div class="slick--next">' + arrow_icon + '</div>';

    var hero_slider = $('.hero__slider');
    hero_slider.slick({
        arrows: true,
        infinite: true,
        //rows: 0, // Fix vor v1.8.0-1
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: arrow_next,
        prevArrow: arrow_prev,
        //mobileFirst: true,
    });

    var concept_slider = $('.concept__slider');
    concept_slider.slick({
        arrows: true,
        infinite: true,
        //rows: 0, // Fix vor v1.8.0-1
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: arrow_next,
        prevArrow: arrow_prev,
        //mobileFirst: true,
    });

    var quote_slider = $('.quote__slider');
    quote_slider.slick({
        arrows: true,
        infinite: true,
        //rows: 0, // Fix vor v1.8.0-1
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: arrow_next,
        prevArrow: arrow_prev,
        //mobileFirst: true,
    });
};

export default sliderInit;
