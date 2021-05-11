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

    var trailer_popup = $('.movie__trailer');
    trailer_popup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.gallery__wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

    // STICKY BANNER ON MOVIE PAGES
    function sticktothebottom() {
        var panel = $('#watch_banner');

        if (panel) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop();
            var top = $('#stick_banner').offset().top;
            var panelh = $('#watch_banner').height();
            var bottom = $('#unstick_banner').offset().top;
            $('#unstick_banner').height(panel.outerHeight());

            if (window_top + h < bottom + panelh){
            }
            if (window_top + h > top) {
                panel.addClass('stick');
            }

            if (window_top + h < top  ) {
                panel.removeClass('stick');
                panel.addClass('transition');
            }

            if (window_top + h > bottom + panelh) {
                $('#unstick_banner').height(0);
                if (panel.hasClass('stick')) {
                    panel.removeClass('stick');
                    panel.removeClass('transition');
                }
            }
        }

    }
    $(function() {
        $(window).scroll(sticktothebottom);
        sticktothebottom();
    });

};

export default functionsInit;
