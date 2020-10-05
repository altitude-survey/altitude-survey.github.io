(function(x) {
  let script = document.createElement("script");
  script.src = "/js/textFit.min.js";
  script.onload = (e) => {
    function doFit(ev) {
      console.log("doFit:",ev.type);
      textFit(document.querySelectorAll(".uk-overlay h4"));
    }
    window.addEventListener("resize", doFit);
    window.addEventListener('orientationchange', doFit);
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", doFit);
    } else {
      doFit(e);
    }
  };
  document.head.append(script);
})();
