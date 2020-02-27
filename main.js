const menuToggle = document.querySelector('.menu-toggle')
const mainNav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('close');
  mainNav.classList.toggle('show');
})

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('show')
})

// sliders
new Glide('.glide').mount()
new Glide('.glide-2', {
  gap: 6,
  autoplay: 10000
}).mount()