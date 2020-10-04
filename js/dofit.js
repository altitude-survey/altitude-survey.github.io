(function(x) {
  let script = document.createElement("script");
  script.src = "/js/textFit.min.js";
  script.onload = () => {
    function doFit() {
      console.log("doFit:",doFit.caller);
      textFit(document.querySelectorAll(".uk-overlay h4"));
    }
    window.addEventListener("resize", doFit);
    window.addEventListener('orientationchange', doFit);
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", doFit);
    } else {
      doFit();
    }
  };
  document.head.append(script);
})();
