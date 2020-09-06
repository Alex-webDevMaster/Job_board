// burger

let burger = document.querySelector(".burger"),
    menu = document.querySelector(".burger__menu"),
    overlay = document.querySelector('.burger__overlay'),
    body = document.querySelector("body"),
    links = document.querySelectorAll(".burger__link");

burger.addEventListener("click", function toggler() {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('burger__menu_active');
    overlay.classList.toggle('burger__overlay_active');
    body.classList.toggle('lock');
    links.forEach(item => {
        item.addEventListener("click", () => {
            if (burger.classList.contains("burger_active")) {
                toggler();
            }
        })
    });
    window.addEventListener("click", (e) => {
        if (e.target === menu && burger.classList.contains("burger_active")) {
            toggler();
        }
    });
});

//tabs

let trigger = document.querySelectorAll(".tab__link"),
    content = document.querySelectorAll(".tab__content");

trigger.forEach(item => {
    item.addEventListener("click", () => {
        trigger.forEach(trigger => {
            trigger.classList.toggle("tab__link_active");
        });
        content.forEach(content => {
            content.classList.toggle("tab__content_active");
        });
    });
});

// slider

let wrapper = document.querySelector(".slider__wrapper"),
    inner = document.querySelector(".slider__inner"),
    width = window.getComputedStyle(wrapper).width,
    slides = document.querySelectorAll(".slider__item"),
    dots = document.querySelectorAll(".slider__dot"),
    dotsPanel = document.querySelector(".slider__panel");

inner.style.width = 100 * slides.length + '%';
inner.style.display = "flex"
inner.style.transition = "all 0.8s ease-in-out"
wrapper.style.overflow = "hidden"

slides.forEach(slide => {
    slide.style.width = width;
});

dotsPanel.addEventListener("click", function (e) {
    let target = e.target;
    if (target.classList.contains("slider__dot")) {
        dots.forEach(item => {
            item.classList.remove("slider__dot_active");
        });
        target.classList.add("slider__dot_active");
    }
    let offset = (target.dataset.slideTo - 1) * parseInt(width, 10);
    inner.style.transform = `translateX(-${offset}px)`;
});

