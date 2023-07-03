// header //
const mobile = document.getElementById('mobile')

function togglemenu (event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

mobile.addEventListener('click', togglemenu);
mobile.addEventListener('touchstart', togglemenu);



// main // 