(function(x) {
  let link = document.createElement("link"); //<link rel="stylesheet" href="/css/sw-0.css" />
  link.rel = 'stylesheet';
  link.href =
    window.location.pathname.search("/v2/") == 0
      ? "/css/sw-3.css"
      : "/css/sw-0.css";
  document.head.append(link);

  window.addEventListener("keydown", e => {
    if (e.ctrlKey && e.code.startsWith("Digit")) {
      e.preventDefault();
      //document.body.style.backgroundImage = window.getComputedStyle(document.body).backgroundImage.replace(/(?<=_)\d(?=\.jpg)/i, e.key);
      let old = document.querySelector(x.selector),
          new = document.createElement("link");
      new.rel = 'stylesheet';
      new.onload = (e) =>
        UIkit.notification({
          message: 'style № '+e.target.href.substr(-5,1) + " ok!",
          status: "primary",
          pos: "bottom-right",
          timeout: 1000,
        });
      new.setAttribute(
        x.attrName,
        `/css/sw-${e.key}.css` 
      );
      old && old.remove();
      document.head.append(new);
    }
  });
})({
  selector: 'head link[rel="stylesheet"][href^="/css/sw-"]',
  attrName: 'href',
  regexp: /\d/
});
