const menuButton = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')

let navBarState = 0

function navBarController() {
    if (navBarState == 0) {
        navBar.classList.remove('inactive-bar')
        navBar.classList.add('active-bar')

        navBarState = 1
    }

    else {
        navBar.classList.remove('active-bar')
        navBar.classList.add('inactive-bar')

        navBarState = 0
    }
}

menuButton.addEventListener('click', () => {
    navBarController()
})