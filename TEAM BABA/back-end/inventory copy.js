let isTransitioning = false;

document.getElementById('navigateButton').addEventListener('click', function () {
  if (!isTransitioning) {
    isTransitioning = true;  // Prevent multiple transitions
    document.body.classList.add('fade-out');  // Apply fade-out animation
    setTimeout(function () {
      window.location.href = 'next-page.html';  // Redirect after animation
    }, 1000);  // 1000ms for smooth transition
  }
});