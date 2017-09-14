
(function( $ ) {
  var Module = function(jQuery, options) {
    var defaults = {
      init: true,
      values: ['off', 'on'],
      name: 'checkbox-toggle',
      separator: ',',
    };

    this.jQuery = jQuery;
    this.options = this.jQuery.extend(true, defaults, options || {});
  };

  Module.prototype.initialize = function(element) {
    if (this.shouldInitialize(element)) {
      this.update(element);
    }
  };

  Module.prototype.shouldInitialize = function() {
    return typeof this.options.init == 'undefined' || this.options.init != false;
  };

  Module.prototype.bind = function(element) {
    var self = this;
    element.on('change', function() {
      self.onChange(event);
    });
  };

  Module.prototype.onChange = function(event) {
    this.update(this.jQuery(event.target));
  };

  Module.prototype.getValues = function(elements) {
    var data = elements.data(this.options.name);

    if (data) {
      var values = data.split(this.options.separator);

      if (values instanceof Array && values.length === 2) {
        return values;
      }
    }

    return this.options.values;
  };

  Module.prototype.update = function(element) {
    var values = this.getValues(element);

    if (element.prop('checked')) {
      element.val(values[1]);
    } else {
      element.val(values[0]);
    }
  };

  $.fn.checkboxToggle = function(options) {
    var module = new Module($, options);

    return this.each(function() {
      var element = $(this);
      module.initialize(element);
      module.bind(element);
    });
  };

}( jQuery ));

