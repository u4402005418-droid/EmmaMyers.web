const gallery = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.dataset.full || e.target.src;
    lightbox.classList.add('show');
  }
});

// Imposta link ufficiali
document.getElementById('link-instagram').href = 'https://www.instagram.com/emmamyersofficial/';
document.getElementById('link-twitter').href = 'https://twitter.com/';
document.getElementById('link-imdb').href = 'https://www.imdb.com/';
