(function ($) {
    $.fn.extend({
        set: function () {
            $('tr', this).mouseover(function () {
                $(this).css('background-color', 'red').siblings().css('backgroundColor', '');
            });
        },
        clear: function () {
            $('tr', this).unbind().removeAttr('style');
        }
    });
})(jQuery);