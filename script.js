const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 1050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text',{origin: 'top'});
sr.reveal('.pf-grid',{origin: 'bottom'});

sr.reveal('.about-text-box', {origin: 'bottom'});
sr.reveal('.about-image', {origin: 'top'});

sr.reveal('.skills-grid1',{origin: 'top'});
sr.reveal('.skills-grid2',{origin: 'bottom'});

sr.reveal('.container1',{origin: 'left'});
sr.reveal('.container2',{origin: 'top'});
sr.reveal('.container3',{origin: 'right'});


sr.reveal('.project-box1',{origin: 'bottom'});
sr.reveal('.project-box2',{origin: 'top'});
sr.reveal('.project-box3',{origin: 'bottom'});
sr.reveal('.project-box4',{origin: 'bottom'});
sr.reveal('.project-box5',{origin: 'top'});
sr.reveal('.project-box6',{origin: 'bottom'});

sr.reveal('.name-heading',{origin: 'top'});
sr.reveal('.contact-items',{origin: 'top'});
sr.reveal('.contact-symbols',{origin: 'bottom'});
sr.reveal('.contact-photo',{origin: 'bottom'});
sr.reveal('.input-box',{origin: 'top'});
sr.reveal('.portfolio-video',{origin: 'bottom'});
sr.reveal('.btn',{origin: 'top'});