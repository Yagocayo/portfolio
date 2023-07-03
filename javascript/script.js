// header //
const mobile = document.getElementById('mobile')

function togglemenu (event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
       event.currentTarget.setAttribute('aria-label','fechar menu' )
    } else {
       event.currentTarget.setAttribute('aria-label','abrir menu' )
    }
}

mobile.addEventListener('click', togglemenu);
mobile.addEventListener('touchstart', togglemenu);



// main // 