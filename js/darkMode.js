function darkMode(){
    const element = document.querySelector('body');
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    const btn = document.getElementById('btn')
    const logo = document.getElementById('logo')
    element.classList.toggle('dark')
    footer.classList.toggle('dark2')
    nav.classList.toggle('dark2')
    btn.classList.toggle('btnDark')
    logo.classList.toggle('logoDark')
}