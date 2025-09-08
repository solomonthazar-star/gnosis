// Add subtle parallax effect when scrolling
const video = document.getElementById('bg-video');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  video.style.transform = `scale(1.1) translateY(${scrollPos * 0.2}px)`;
});
