import "jquery";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* Bootstrap */
import 'bootstrap';
import 'slick-carousel';
import 'magnific-popup';
import functionsInit from './functionsInit.js';
import sliderInit from './sliderInit.js';
import AOS from 'aos';

AOS.init({
    delay:150,
    duration:300,
    easing:'ease-in-out',
});

$(window).on("scroll", function () {
    AOS.refresh();
 });

function init() {
    functionsInit();
    sliderInit();
}
init();
