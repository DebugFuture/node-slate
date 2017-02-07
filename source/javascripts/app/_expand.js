//= require ../lib/_jquery
(function (global) {
  'use strict';

  var initExpand = function() {
      $('.expand-examples').click(function () {
        var body = $('body');
        if (body.hasClass('examples-collapsed')) {
            body.removeClass('examples-collapsed');
        } else {
            body.addClass('examples-collapsed');
        }
        
      });
  }

  $(function() {
    initExpand();
  });
})(window);
