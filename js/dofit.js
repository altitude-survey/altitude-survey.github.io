(function(x) {
  // document.addEventListener('readystatechange', () => console.log(document.readyState));
  function doFit() {
    // console.log('doFit');
    textFit(document.querySelectorAll(".uk-overlay h4"));
  }
  // window.onload = doFit;
  // window.onresize = doFit;
  //UIkit.util.on(document, 'DOMContentLoaded',doFit);
  document.addEventListener("DOMContentLoaded", doFit);
  document.addEventListener("resize", doFit);
  if (document.readyState == "complete") doFit();
})();
