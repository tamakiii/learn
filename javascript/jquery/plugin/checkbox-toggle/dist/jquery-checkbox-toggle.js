
(function( $ ) {
  $.fn.checkboxToggle = function(options) {
    var options = options ? options : {};

    var init = function(checkbox) {
      update(checkbox);
    };

    var onChange = function(event) {
      update($(event.target));
    };

    var update = function(checkbox) {
      var values = checkbox.attr('data-checkbox-toggle').split(',');

      if (checkbox.prop('checked')) {
        checkbox.val(values[1]);
      } else {
        checkbox.val(values[0]);
      }
    };

    return this.each(function() {
      if (typeof options.init == 'undefined' || options.init != false) {
        init($(this));
      }
      $(this).on('change', onChange);
    });
  };

}( jQuery ));

