var $ = require('jquery');
var _ = require('lodash');
var doT = require('dot');
require('./assets/main.css');

(function () {
  var $searchInput = $('#search-wrapper input[name="s"]');

  // doT.js template
  var resultTemplate =
    '<div class="search-result">You types: {{=it.query}}</div>';
  var compiledTemplate = doT.compile(resultTemplate);

  $searchInput.on('input', function () {
    var query = $(this).val();
    console.log('Search input changed: ', $(this).val());

    if (query.length > 0) {
      // generate HTML component using doT.js
      var renderedHTML = compiledTemplate({ query: query });

      // find the container to place the resulting HTML component
      var $resultsContainer = $('#search-results-container');
      // if not found, create a container to place the resulting HTML component
      if ($resultsContainer.length === 0) {
        // create a container
        $resultsContainer = $('<div id="search-results-container"></div>');
        // append the container to the body
        $('body').append($resultsContainer);
      }

      // clear the previous results and inject the new one
      $resultsContainer.html(renderedHTML);
    } else {
      // clear the previous results
      $('#search-results-container').html('');
    }
  });

  alert('Event listener injected to search input');
})();
