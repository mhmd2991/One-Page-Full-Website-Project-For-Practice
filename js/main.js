let toggleBtn = document.querySelector('#toggleBtn i'),
    menuBar = document.querySelector('#menuBar'),
    header= document.querySelector("header");
    scrollTopBtn = document.querySelector('#scrollTop'),
    sections = document.querySelectorAll('section'),
    navLi = document.querySelectorAll('#menuBar li a');

toggleBtn.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    toggleBtn.classList.toggle('fa-times');
});

/*window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.querySelector("header").style.backgroundColor = "rgb(31, 30, 30)";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
    }
});*/
window.addEventListener('scroll', () => {
    scrollY > 0 ? header.classList.add('active') : header.classList.remove('active')
});

window.addEventListener('scroll', () => {
    this.scrollY >= 500 ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/*ScrollBar And Scroll Section Active*/
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.dataset.after == current) {
            li.classList.add('active');
        }
    });
});
