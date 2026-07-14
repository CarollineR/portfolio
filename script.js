const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("open");
        });
    });
}

  const typingEl = document.getElementById('typing');
  const fullText = '// desenvolvendo o futuro, um commit de cada vez';
  let ti = 0;
  function typeLoop() {
    if (ti <= fullText.length) {
      typingEl.innerHTML = fullText.slice(0, ti) + '<span class="typing-cursor">&nbsp;</span>';
      ti++;
      setTimeout(typeLoop, 45);
    } else {
      setTimeout(() => { ti = 0; typeLoop(); }, 2600);
    }
  }
  typeLoop();

  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('#sobre').forEach(el => skillObs.observe(el));
