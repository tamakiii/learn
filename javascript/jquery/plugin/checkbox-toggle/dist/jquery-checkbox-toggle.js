
(function( $ ) {
  var Module = function(jQuery, options) {
    this.jQuery = jQuery;
    this.options = options || {};
    this.values = ['off', 'on'];
    this.name = 'checkbox-toggle';
    this.separator = ',';
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
    var data = elements.data(this.name);

    if (data) {
      var values = data.split(this.separator);

      if (values instanceof Array && values.length === 2) {
        return values;
      }
    }

    return this.values;
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

