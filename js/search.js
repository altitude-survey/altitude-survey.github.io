(function() {
  let script = document.createElement("script");
  script.src = "/js/simple-jekyll-search.min.js";
  script.onload = () =>
    SimpleJekyllSearch({
      searchInput: document.getElementById("global-search-input"),
      resultsContainer: document.getElementById(
        "global-search-results-container"
      ),
      json: "/_/search.json",
      limit: 20,
      fuzzy: false
    });

  document.head.append(script);
  UIkit.util.on("#search-modal", "show", () =>
    UIkit.util.$("#global-search-input").focus());
})();
