(function() {
  var processKeyEvent;

  processKeyEvent = function(event) {
    switch (event.keyIdentifier) {
      case 'U+0020':
        if ((event.target.nodeName.toLowerCase() !== 'input') && (event.target.nodeName.toLowerCase() !== 'textarea') && ((event.target.attributes['role'] === void 0) || event.target.attributes['role'].value !== 'textbox')) {
          window.scrollBy(0, window.innerHeight / 2);
          return event.preventDefault();
        }
    }
  };

  window.addEventListener('keydown', processKeyEvent, false);

}).call(this);
