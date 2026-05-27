AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    offset: 120
});

const tracker = document.getElementById('mouseTracker');
const dot = document.getElementById('mouseDot');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = posX + 'px';
    dot.style.top = posY + 'px';

    tracker.animate({
        left: posX + 'px',
        top: posY + 'px'
    }, { duration: 250, fill: 'forwards' });
});

const interactiveElements = document.querySelectorAll('a, button, .service-card, .skill-item, .education-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        tracker.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        tracker.classList.remove('hovered');
    });
});

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
