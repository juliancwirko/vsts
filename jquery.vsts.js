/*!
 * jQuery Very Simple Text Slider
 * Original author: Julian Ćwirko
 * Website: http://www.redsunmedia.pl
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {
    'use strict';

    var pluginName = 'vsts',
        defaults = {
            speed: 3000, /* ms */
            effect: 'horizontal' /* horizontal | vertical */
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this.slidesAmount = $(this.element).children().length;
        this.currentSlide = $(this.element).children(':nth-child(1)');
        this.nextSlide = $(this.element).children(':nth-child(2)');
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            $(this.element).children().hide();
            if(this.options.effect === 'horizontal') {
                this.currentSlide.show('slow');
            }
            else {
                this.currentSlide.slideDown('slow');
            }
            this.interval();
        },
        interval: function() {
            var cslide = this.currentSlide;
            var nslide = this.nextSlide;
            var samount = this.slidesAmount;
            var thiselement = this.element;
            var optEffect = this.options.effect;
            var num = 1;
            window.setInterval(function () {
                if(optEffect === 'horizontal') {
                    cslide.hide('slow');
                    nslide.show('slow');
                }
                else {
                    cslide.slideUp('slow');
                    nslide.slideDown('slow');
                }
                if(num != samount) {
                    cslide = nslide;
                    nslide = cslide.next();
                }
                else {
                    cslide = $(thiselement).children(':nth-child(1)');
                    nslide = $(thiselement).children(':nth-child(2)');
                    if(optEffect === 'horizontal') {
                        cslide.show('slow');
                    }
                    else {
                        cslide.slideDown('slow');
                    }
                    num = 0;
                }
                num++;
                }, this.options.speed);
        }
    };
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    };
})( jQuery, window, document );
