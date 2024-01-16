function addCopyTitleLinkButton(clipboard) {
  var button = document.getElementById('copy-title-link')
  button.addEventListener('click', function() {
    clipboard.writeText(window.__theme.linkToPage).then(function() {
      button.blur();
      button.children[0].className = "title-link-green";
      setTimeout(function() {
        button.children[0].className = "title-link-grey";
      }, 600);
    }, function(error) {
      console.log(error)
      button.children[0].className = "title-link-red";
    });
  });
}

if (navigator && navigator.clipboard) {
  addCopyTitleLinkButton(navigator.clipboard);
} else {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
  script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
  script.crossOrigin = 'anonymous';
  script.onload = function() {
    addCopyTitleLinkButton(clipboard);
  };

  document.body.appendChild(script);
}
