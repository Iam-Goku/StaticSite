 //Dark Mode
// Dark mode toggle
const body = document.body;
const toggle = document.getElementById('darkModeToggle');

// Default to dark mode
body.classList.add('dark-mode');

if (toggle) {
  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}


  // Show the button when scrolling down
    window.addEventListener("scroll", function () {
    const backToTopBtn = document.querySelector(".back-to-top");
    const whatsappBtn = document.querySelector(".whatsapp-float");
    const logo = document.getElementById("sticky-logo");

    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
      whatsappBtn.style.display = "block";
      logo.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
      whatsappBtn.style.display = "none";
      logo.style.display = "none";
    }
  });
  
    // Scroll to top when clicked
    document.querySelector(".back-to-top").addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
//mail send confirmation
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_652um7a", "template_v4lmseg", this)
      .then(() => alert("Message sent!"))
      .catch((error) => alert("Failed to send message."));
  });


  //Service Video Modal
  
  $(document).ready(function() {
    // When a video trigger is clicked
    $('.video-trigger').click(function() {
      // Get the video source from the clicked div's data attribute
      const videoSrc = $(this).data('video-src');
      
      // Update the iframe's src with the correct video
      $('#dynamicVideoFrame').attr('src', videoSrc);
      
      // Optional: Autoplay the video when modal opens
      // Note: Many browsers block autoplay without user interaction
      $('#videoModal').on('shown.bs.modal', function() {
        $('#dynamicVideoFrame')[0].src += "?autoplay=1";
      });
      
      // Reset video when modal closes (stops playback)
      $('#videoModal').on('hide.bs.modal', function() {
        $('#dynamicVideoFrame').attr('src', '');
      });
    });
  });