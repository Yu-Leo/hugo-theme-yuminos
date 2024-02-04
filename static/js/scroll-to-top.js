const btn = document.getElementById('scroll-to-top-btn');
const article = document.getElementById('article');

btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

function getVerticalScrollPercentage(elm) {
  var p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
}

document.onscroll = function() {
  if (getVerticalScrollPercentage(document.body) > 0) {
    btn.style.visibility = "visible";
    btn.style.opacity = 1;
  } else {
    btn.style.visibility = "hidden";
    btn.style.opacity = 0;
  }
}
