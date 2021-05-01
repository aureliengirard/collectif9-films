import "jquery";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* Bootstrap */
import 'bootstrap';
import 'slick-carousel';
import 'magnific-popup';
import sliderInit from './sliderInit.js';

document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});

function init() {
    sliderInit();
}
init();
