const butnt = document.querySelector('.p-head-container')
const button = butnt.querySelector('.menuIcon').addEventListener('click',function(e){
    e.preventDefault();
    const menuBg = document.querySelector('.menu-bar')
    const hidden = butnt.querySelector('.nav-bar').classList.toggle('hidden')
    if(menuBg.classList.contains('menu-bg')){
        menuBg.classList.remove('menu-bg')
    }
    else{
        menuBg.classList.add('menuBg')
    }
    const icon = butnt.querySelector('.menuIcon')
    if(hidden){
        icon.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
    else{
        icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
})
