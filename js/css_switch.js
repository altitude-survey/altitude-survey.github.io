(function(x) {
  let link = document.createElement("link"); //<link rel="stylesheet" href="/css/sw-0.css" />
  link.rel = 'stylesheet';
  link.href = '/css/sw-0.css';
  document.head.append(link);

  window.addEventListener("keydown", e => {
    if (e.ctrlKey && e.code.startsWith("Digit")) {
      e.preventDefault();
      //document.body.style.backgroundImage = window.getComputedStyle(document.body).backgroundImage.replace(/(?<=_)\d(?=\.jpg)/i, e.key);
      let tag = document.querySelector(x.selector);
      tag.setAttribute(
        x.attrName,
        tag.getAttribute(x.attrName).replace(x.regexp, e.key)
      );
    }
  });
})({
  selector: 'head link[rel="stylesheet"][href^="/css/sw-"]',
  attrName: 'href',
  regexp: /\d/
});
