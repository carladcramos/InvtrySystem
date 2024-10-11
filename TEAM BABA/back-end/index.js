let isTransitioning = false;

document.getElementById('navigateButton').addEventListener('click', function () {
  if (!isTransitioning) {
    isTransitioning = true;
    document.body.classList.add('fade-out');
    setTimeout(function () {
      window.location.href = 'next-page.html'; 
    }, 1000);  
  }
});