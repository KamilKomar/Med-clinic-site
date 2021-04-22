const burgerBtn = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
const burgerContactBtn = document.querySelector('.nav__burger-contact');
const navContact= document.querySelector('.nav__contact');
const navLink = document.querySelectorAll('.nav__link');
const galleryTab = document.querySelectorAll('.gallery__tab')
const galleryImg = document.querySelectorAll('.gallery__img')
const footerYear = document.querySelector('.footer__year')
const arrowTop = document.querySelector('.arrowToTop')


burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    if(navContact.classList.contains('nav-active-contact')) {
        navContact.classList.remove('nav-active-contact');
    }
})
burgerContactBtn.addEventListener('click', () => {
    navContact.classList.toggle('nav-active-contact');
    if(navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
    }
})

navLink.forEach(link => {
    link.addEventListener('click', ()=>{
        navLinks.classList.remove('nav-active');
    })
})


galleryTab.forEach(tab => {
    tab.addEventListener('click',()=> {
        galleryTab.forEach(item=>{
            item.classList.remove('tabActive');
        });
        tab.classList.add('tabActive');
        let value = tab.textContent;
        galleryImg.forEach(img=>{
            img.style.display ='none';
            if(img.getAttribute('data-id')===value || value ==='Wszystkie'){
                img.style.display ='block';
            };
        });
    });
})

const actualYear = () => {
    const year = (new Date).getFullYear();
    footerYear.textContent = `${year}`
}
actualYear()

window.addEventListener('scroll', ()=> {
    const scrolled = window.scrollY
    if (scrolled>=1000){
        arrowTop.style.display = 'block'
    } else{
        arrowTop.style.display = 'none'

    }

})


$('.team__carousel').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }
        },
    ]
});
