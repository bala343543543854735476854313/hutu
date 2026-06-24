document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navOverlay.classList.toggle('active');
    });
  }

  // Parallax Scrolling Effect for Video Thumbnail
  const videoThumbnail = document.querySelector('.hero-video-thumbnail');

  if (videoThumbnail) {
    // Make it look like it's floating above the page
    videoThumbnail.style.position = 'relative';
    videoThumbnail.style.zIndex = '50';
    videoThumbnail.style.transition = 'transform 0.1s ease-out';
    
    const wrapper = videoThumbnail.querySelector('.thumbnail-wrapper');
    if (wrapper) {
      wrapper.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
      wrapper.style.border = '2px solid rgba(255,255,255,0.1)';
    }
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (videoThumbnail) {
      // Video thumbnail moves DOWN as you scroll down
      videoThumbnail.style.transform = `translateY(${scrollY * 0.85}px)`;
    }
  });
});
