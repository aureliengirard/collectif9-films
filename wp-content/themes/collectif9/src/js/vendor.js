import "jquery";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* Bootstrap */
import 'bootstrap';
import 'slick-carousel';
import 'magnific-popup';
import functionsInit from './functionsInit.js';
import sliderInit from './sliderInit.js';

function init() {
    functionsInit();
    sliderInit();
}
init();
