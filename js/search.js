(function() {
  let script = document.createElement("script");
  script.src = "/js/simple-jekyll-search.min.js";
  script.onload = () =>
    SimpleJekyllSearch({
      searchInput: document.getElementById("global-search-input"),
      resultsContainer: document.getElementById(
        "global-search-results-container"
      ),
      json: "/search.json",
      limit: 25,
      fuzzy: true
    });

  document.head.append(script);
  UIkit.util.on("#search-modal", "show", function() {
    UIkit.util.$("#global-search-input").focus();
  });
})();
