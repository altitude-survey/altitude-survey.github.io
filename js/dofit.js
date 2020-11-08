(function(x) {
  let script = document.createElement("script");
  script.src = "/js/textFit.min.js";
  script.onload = (e) => {
    function doFit(ev) {
      console.log("all Fit on: ",ev.type);
      textFit(document.querySelectorAll(".uk-overlay h4"));
      let la=document.getElementById("logo-anch");
      la.style.width=la.offsetHeight+'px';
    }
    window.addEventListener("resize", doFit);
    window.addEventListener('orientationchange', doFit);
    function fitOne(el,reason){
      textFit(el);
      console.log(`Fit ${reason}`);
    }
    document.querySelectorAll(".uk-card-media-top > img")
      .forEach(x =>
        x.src && x.complete ?
            fitOne(
              x.parentElement.querySelector("h4"),
               'exist ' + (new URL(x.src)).pathname
               )
          : x.addEventListener("load", e =>
              fitOne(
                e.target.parentElement.querySelector("h4"),
                'onload ' + (new URL(e.target.src)).pathname
              )
            )
      );
    // if (document.readyState == "loading") {
    //   document.addEventListener("DOMContentLoaded", doFit);
    // } else {
    //   doFit(e);
    // }
  };
  document.head.append(script);
})();
