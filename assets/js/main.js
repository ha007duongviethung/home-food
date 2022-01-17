class Main {
    $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)

    menuToggle () {
        const menubar = this.$('.menu-bars')
        const navbar = this.$('.header-small')

        menubar.addEventListener('click', () => {
            menubar.classList.toggle('fa-times')
            navbar.classList.toggle('active')
        })
    }
}