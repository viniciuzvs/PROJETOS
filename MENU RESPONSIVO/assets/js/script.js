function menuShow(){
    let menumobile = document.querySelector('.mobile-menu');
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/134216_menu_lines_hamburger_icon (1).png"
    } else{
        menumobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/circle_x_iconw.png"
    }
}