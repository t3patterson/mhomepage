let navToggler = document.getElementById('navbar-toggler')
let navbarOptions = document.getElementById('navbar-options')

// Navbar Code
function handleNavToggle(){

  console.log(navToggler)
  if(navToggler.classList.contains('nav__toggle-menu--menu-active')){
    navToggler.classList.remove('nav__toggle-menu--menu-active')
    navbarOptions.classList.remove('nav-options-container--menu-active')
  } else {
    navToggler.classList.add('nav__toggle-menu--menu-active')
    navbarOptions.classList.add('nav-options-container--menu-active')
  }
}

navToggler.addEventListener('click', handleNavToggle)
