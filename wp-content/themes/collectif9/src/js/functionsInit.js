const functionsInit = function() {

    document.addEventListener('lazybeforeunveil', function(e){
        var bg = e.target.getAttribute('data-bg');
        if(bg){
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    });

    function throttle(fn, delay) {
      var last = undefined;
      var timer = undefined;

      return function () {
        var now = +new Date();

        if (last && now < last + delay) {
          clearTimeout(timer);

          timer = setTimeout(function () {
            last = now;
            fn();
          }, delay);
        } else {
          last = now;
          fn();
        }
      };
    }

    var $header = document.querySelector('.navbar');

    function onScroll() {
      if (window.pageYOffset) {
        $header.classList.add('is_sticky');
      } else {
        $header.classList.remove('is_sticky');
      }
    }

    window.addEventListener('scroll', throttle(onScroll, 25));
};

export default functionsInit;
