
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
