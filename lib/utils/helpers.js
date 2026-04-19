// Utility: Auto-scroll page loading animation
export const initScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan z-50';
  progressBar.style.width = '0%';
  progressBar.style.transition = 'width 0.3s ease';
  document.body.appendChild(progressBar);

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
  };

  window.addEventListener('scroll', updateProgress);
  return () => window.removeEventListener('scroll', updateProgress);
};

// Utility: Detect scroll direction
export const useScrollDirection = () => {
  let lastScrollY = 0;

  const getDirection = () => {
    const direction = window.scrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = window.scrollY;
    return direction;
  };

  return getDirection;
};

// Utility: Smooth section scroll
export const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
