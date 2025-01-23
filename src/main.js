var $ = require('jquery');
var _ = require('lodash');

(function () {
  var $searchInput = $('#search-wrapper input[name="s"]');

  $searchInput.on('input', function () {
    console.log('Search input changed: ', $(this).val());
    if ($(this).val().length > 0) {
      alert('You have typed: ' + $(this).val());
    }
  });
  alert('Event listener added to search input');
})();
