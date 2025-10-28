// Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic',
    mirror: false
  });

  // Update AOS on Locomotive scroll
  scroll.on('scroll', () => AOS.refreshHard());

  // Ensure both refresh correctly after load
  window.addEventListener('load', () => {
    AOS.refresh();
    scroll.update();
  });

  // Smooth scroll for navbar links
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = a.getAttribute('href').replace('#', '');
      scroll.scrollTo(document.getElementById(target));
    });
  });

  // Typed.js
  new Typed('.typed', {
    strings: ['Python Developer', 'Frontend Developer.', 'Computer Science Student. '],
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 1600,
    loop: true
  });

  // Skill bars animation when in view
  const skillBars = document.querySelectorAll('.skill .bar i');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const fill = el.getAttribute('data-fill') || 60;
        el.style.width = fill + '%';
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(s => io.observe(s));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
  const seePro = () => {
    document.querySelector(`[data-scroll-to="#projects"]`).click();
  };