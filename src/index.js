const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click',(e)=>{
    e.preventDefault()

    const ul = document.querySelector('nav > ul')
    console.log(hamburger)

    ul.classList.toggle('menu-slide')
    hamburger.classList.toggle('cross')
})