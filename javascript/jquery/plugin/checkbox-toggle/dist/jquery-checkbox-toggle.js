
(function( $ ) {
  $.fn.checkboxToggle = function(options) {
    var options = options ? options : {};
    var defaultValues = ['off', 'on'];

    var init = function(checkbox) {
      update(checkbox);
    };

    var onChange = function(event) {
      update($(event.target));
    };

    var getValuesFromCheckbox = function(checkbox) {
      var data = checkbox.attr('data-checkbox-toggle');

      if (data) {
        var values = data.split(',');

        if (values instanceof Array && values.length === 2) {
            return values;
        }
      }

      return ['off', 'on'];
    };

    var update = function(checkbox) {
      var values = getValuesFromCheckbox(checkbox);

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

