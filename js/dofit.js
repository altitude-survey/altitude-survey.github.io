(function(x) {
  let script = document.createElement("script");
  script.src = "/js/textFit.min.js";
  script.onload = () => {
    function doFit() {
      console.log("doFit");
      textFit(document.querySelectorAll(".uk-overlay h4"));
    }
    document.addEventListener("resize", doFit);
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", doFit);
    } else {
      doFit();
    }
  };
  document.head.append(script);
})();
