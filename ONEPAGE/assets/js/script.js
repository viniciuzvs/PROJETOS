function menuShow(){
    let menumobile = document.querySelector('.mobile-menu');
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/iconmenu.png"
    } else{
        menumobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/x.png"
    }
}


