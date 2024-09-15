$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

const sections = $('section');
const nacItems = $('.nav-item');

$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else{
        header.css('box-shadow', '5px 1px 10px rgba(0,0,0,0.5');
    }

    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionbottom = sectionTop+ section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionbottom) {
            activeSectionIndex = i;
            return false;
        }
    })
    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addclass('active');
});

  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '30%'
  });

  ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '30%'
  });

  ScrollReveal().reveal('#avaliation_chef', {
    origin: 'left',
    duration: 1000,
    distance: '30%'
  });

  ScrollReveal().reveal('.feedback', {
    origin: 'rigt',
    duration: 1000,
    distance: '30%'
  });

  ScrollReveal().reveal('.container', {
    origin: 'left',
    duration: 1000,
    distance: '30%'
  });

});