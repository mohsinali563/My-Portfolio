function animateLoadingLines() {
    const loadingLines = document.querySelectorAll('.loading-progress');
    loadingLines.forEach(line => {
      const rect = line.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        line.style.animation = 'fillLoadingLine 2s forwards';
      }
    });
  }

  window.addEventListener('scroll', function(){
    animateLoadingLines();
  });

 