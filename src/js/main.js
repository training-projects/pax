var button = document.querySelector('.toggle-menu'),
    nav    = document.querySelector('.main-nav')

button.addEventListener('click', function() {
  nav.classList.toggle('-open')
})
