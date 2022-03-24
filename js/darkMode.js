function darkMode(){
    const element = document.querySelector('body');
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    element.classList.toggle('dark')
    footer.classList.toggle('dark2')
    nav.classList.toggle('dark2')
}