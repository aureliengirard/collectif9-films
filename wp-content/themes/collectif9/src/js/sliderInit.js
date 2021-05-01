const sliderInit = function() {

    var hero_slider = $('.hero__slider');
    hero_slider.slick({
        arrows: false,
        infinite: true,
        //rows: 0, // Fix vor v1.8.0-1
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 2000,
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
        //mobileFirst: true,
    });
};

export default sliderInit;
