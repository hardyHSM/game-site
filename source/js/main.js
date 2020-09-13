let slider_dots = document.querySelectorAll(".slider__dot");
let slider_items = document.querySelectorAll(".slider__item");
let slider_next = document.querySelector(".slider__next");
let select = document.querySelector(".select");
let select_head = select.querySelector(".select__selected");
let select_list = document.querySelector(".select__list");
let select_item = document.querySelectorAll(".select__item");
let tabs_head = document.querySelectorAll(".s-features__head");

window.onload = function () {
    tabs_head.forEach((element,index) => {
        element.addEventListener("click", function(e) {
            tabs(element,index);
        });
    });

    slider_dots.forEach((element,index) => {
        element.addEventListener("click", function(e) {
            slider(index);
        });
    });
    slider_items.forEach((element,index) => {
        element.addEventListener("click", function(e) {
            slider(index);
        });
    });
    slider_next.addEventListener("click", function(e) {
        let index =+(document.querySelector(".slider__item--active").getAttribute('data-index'));
        console.log(index);
        if( (index + 1) == slider_items.length) {
             slider(0);
         } else {
            slider(index + 1);
         }
     });

    select_head.addEventListener("click", function () {
        
        select_head.classList.toggle("select__selected--active");
        select_list.classList.toggle("select__list--active");
     });
    document.body.addEventListener("click", function (e) {
        if(!(e.target.closest(".select"))) {
            select.querySelector(".select__selected").classList.remove("select__selected--active");
            select_list.classList.remove("select__list--active");
        }
    });
    select_item.forEach(element => {
        element.addEventListener("click", function () {
            let selected_text = select_head.textContent;

            select_head.textContent = element.textContent;
            element.textContent = selected_text;
        });
    });
}





const slider = function(index) {
    slider_dots.forEach((item,index) => {
        item.classList.remove("slider__dot--active");
    });
    slider_dots[index].classList.add("slider__dot--active");

    slider_items.forEach((element,index) => {
        element.classList.remove("slider__item--big");
        element.classList.remove("slider__item--small");
        element.classList.remove("slider__item--middle");
        element.classList.remove("slider__item--active");
    });
    if(index == 0 ) {
        slider_items[0].classList.add("slider__item","slider__item--big","slider__item--active");
        slider_items[1].classList.add("slider__item","slider__item--middle");
        slider_items[2].classList.add("slider__item","slider__item--small");
    } 
    if(index == 1 ) {
        slider_items[0].classList.add("slider__item","slider__item--middle");
        slider_items[1].classList.add("slider__item","slider__item--big","slider__item--active");
        slider_items[2].classList.add("slider__item","slider__item--middle");
    }
    if(index == 2 ) {
        slider_items[0].classList.add("slider__item","slider__item--small");
        slider_items[1].classList.add("slider__item","slider__item--middle")
        slider_items[2].classList.add("slider__item","slider__item--big","slider__item--active");

    }
};


const tabs = (element,index) => {
    tabs_head.forEach(element => {
        element.closest(".s-features__item").classList.remove("s-features__item--active");
    });
    element.closest(".s-features__item").classList.add("s-features__item--active");
}

let navigation = document.querySelector(".page-header__nav");
let button = document.querySelector(".menu-button");


window.onresize = checkSize;


function checkSize() {
    if(window.innerWidth < 798) {
        navigation.classList.remove("page-header__nav--active")
        button.classList.remove("menu-button--active");
    } else {
        navigation.classList.add("page-header__nav--active")
        button.classList.add("menu-button--active");
    }
}



button.addEventListener("click", function() {
    navigation.classList.toggle("page-header__nav--active");
});


