    document.addEventListener("DOMContentLoaded", function () {
      const themeBtn = document.getElementById('themeToggle');
      const yearEl = document.getElementById("year");
      const backToTop = document.getElementById("backToTop");

      // Year
      yearEl.textContent = new Date().getFullYear();

      // Theme toggle
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeBtn.title = "Switch to Light Mode";
        document.getElementById("brand").style.color = "white";
      } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeBtn.title = "Switch to Dark Mode";
        document.getElementById("brand").style.color = "black";
      }

      themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeBtn.title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
        document.getElementById("brand").style.color = isDark ? "white" : "black";
      });

      // Scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll('section, h2').forEach(el => {
        observer.observe(el);
      });

      // Lightbox
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);

      const img = document.createElement('img');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      lightbox.appendChild(img);
      lightbox.appendChild(close);

      document.querySelectorAll('.certificate img').forEach(image => {
        image.addEventListener('click', e => {
          lightbox.style.display = 'block';
          img.src = e.target.src;
          document.body.style.overflow = 'hidden';
        });
      });

      close.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      });

      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
        }
      });

      document.addEventListener('keydown', e => {
        if (e.key === "Escape") {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
        }
      });

      // Back to Top
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      });

      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });


      

      //second script
      //Editing

          const roles = ["Programmer", "Software Developer"];
    let index = 0;      // الدور الحالي (Programmer / Developer)
    let charIndex = 0;  // الحرف الحالي
    let isDeleting = false;
    const roleElement = document.getElementById("role");

    function typeEffect() {
      const currentRole = roles[index];

      if (isDeleting) {
        // لو بيتمسح
        roleElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index = (index + 1) % roles.length; // انتقل للدور التالي
        }
      } else {
        // لو بيتكتب
        roleElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          setTimeout(typeEffect, 800); // استنى ثانية بعد الكتابة
          return;
        }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 100); // سرعة الكتابة/المسح
    }

    typeEffect();



    });