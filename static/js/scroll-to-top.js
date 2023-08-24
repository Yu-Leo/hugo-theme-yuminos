const btn = document.getElementById('scroll-to-top-btn');
const article = document.getElementById('article');

btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

if (article.offsetHeight > window.innerHeight) {
  btn.style.visibility = "visible";
} else {
  btn.style.visibility = "hidden";
}
