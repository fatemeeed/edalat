function target() {
    var targets = document.querySelectorAll(".target");
  
    for (var i = 0; i < targets.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = targets[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        targets[i].classList.add("active");
      } else {
        targets[i].classList.remove("active");
      }
    }
  }

  function app() {
    var apps = document.querySelectorAll(".app");
  
    for (var i = 0; i < apps.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = apps[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        apps[i].classList.add("active");
      } else {
        apps[i].classList.remove("active");
      }
    }
  }

  function about() {
    var about = document.querySelectorAll(".about");
  
    for (var i = 0; i < about.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = about[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        about[i].classList.add("active");
      } else {
        about[i].classList.remove("active");
      }
    }
  }
  
  
  window.addEventListener("scroll", target);
  window.addEventListener("scroll", app);
  window.addEventListener("scroll", about);