document.addEventListener('DOMContentLoaded', () => {
    const featureItems = document.querySelectorAll('.feature-item');
  
    featureItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
    });
  });