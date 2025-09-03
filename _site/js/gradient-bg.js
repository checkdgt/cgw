function setGradientBackground() {
  const body = document.body;
  const toggle = document.querySelector('.quarto-color-scheme-toggle');
  if (toggle && toggle.classList.contains('alternate')) {
    // Dark mode
    body.style.background = 'linear-gradient(135deg, #181a1b 0%, #12a2ea 100%)';
  } else {
    // Light mode
    body.style.background = 'linear-gradient(135deg, #40526d 0%, #86888d 100%)';
  }
  body.style.backgroundSize = 'cover';
  body.style.backgroundAttachment = 'fixed';
  body.style.transition = 'background 0.3s';
}

document.addEventListener('DOMContentLoaded', setGradientBackground);
document.addEventListener('click', function(e) {
  if (e.target.closest('.quarto-color-scheme-toggle')) {
    setTimeout(setGradientBackground, 100);
  }
});