let tray = document.querySelectorAll(".works_card")

// БАТОНЫ 

let allB = document.querySelector("#all_b");
let webB = document.querySelector("#web_d")
let uxB = document.querySelector("#ux_d")
let mocB = document.querySelector("#moc_d")

// БАТОНЫ 

let view_all = document.querySelector("#view_all_button")
let card_view = 6;




let abc = function(){

    tray.forEach((card, id) => {if(id<card_view){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
    })
}
allB.onclick = abc
view_all.onclick = function(){
    card_view = 999;
    abc();
};
webB.onclick = function(){
    let count = 0
    tray.forEach(card => {if(card.classList.contains("webDesign") && count<card_view){
        card.style.display = "block";
        count++
    } else {
        card.style.display = "none";
    }})
}
uxB.onclick = function(){
    let count = 0
    tray.forEach(card => {if(card.classList.contains("uxDesign") && count<card_view){
        card.style.display = "block";
        count++
    } else {
        card.style.display = "none";
    }})
}
mocB.onclick = function(){
    let count = 0
    tray.forEach(card => {if(card.classList.contains("mocups") && count<card_view) {
        card.style.display = "block";
        count++
    } else {
        card.style.display = "none";
    }})
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        765: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        425: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
});

// БУРГЕР

let burger = document.querySelector(".burger");

let navMenu = document.querySelector(".nav_menu");

burger.addEventListener('click', function() {
        navMenu.classList.toggle("active");
    });


// БУРГЕР


