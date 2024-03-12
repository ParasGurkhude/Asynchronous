var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  var slideInterval;
  var isPlaying = false;

  function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
        showSlide(0)
        stopSlideShow(); // Stop automatic slideshow when last slide is reached
        return;
      }
      showSlide(currentSlide + 1);
      if (!isPlaying) return; // Stop automatic slideshow if not playing
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
    if (!isPlaying) return; // Stop automatic slideshow if not playing
  }

  function toggleSlideShow() {
    if (isPlaying) {
      stopSlideShow();
    } else {
      startSlideShow();
    }
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    document.getElementById('toggleBtn').textContent = 'Stop';
    isPlaying = true;
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
    document.getElementById('toggleBtn').textContent = 'Start';
    isPlaying = false;
  }

  document.getElementById('toggleBtn').addEventListener('click', toggleSlideShow);
  document.getElementById('prevBtn').addEventListener('click', function() {
    prevSlide();
    stopSlideShow(); // Stop automatic slideshow when manual navigation is triggered
  });
  document.getElementById('nextBtn').addEventListener('click', function() {
    nextSlide();
    stopSlideShow(); // Stop automatic slideshow when manual navigation is triggered
  });

  startSlideShow(); // Start the slide show initially