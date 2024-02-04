// https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo

function addCopyButtons(clipboard) {
  document.querySelectorAll("pre > code").forEach(function(codeBlock) {
    var button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerHTML = `<img src="${window.path_to_copy_img}" width=22 class="copy-btn-gruvbox-white"/>`;

    button.addEventListener('click', function() {
      clipboard.writeText(codeBlock.textContent).then(function() {
        button.blur();
        button.children[0].className = "copy-btn-gruvbox-green";
        setTimeout(function() {
          button.children[0].className = "copy-btn-gruvbox-white";
        }, 600);
      }, function(error) {
        console.log(error)
        button.children[0].className = "copy-btn-gruvbox-red";
      });
    });

    var pre = codeBlock.parentNode;
    var highlight = pre.parentNode;
    highlight.prepend(button);

    let codeName = highlight.title
    if (codeName) {
      let div = document.createElement("div");
      div.textContent = codeName;
      div.classList.add("code-name");
      highlight.prepend(div);
    }
  });
}

if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  var script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
  script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
  script.crossOrigin = "anonymous";
  script.onload = function() {
    addCopyButtons(clipboard);
  };

  document.body.appendChild(script);
}
