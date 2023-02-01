const items = document.querySelectorAll(".item")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")
const carouselContainer = document.querySelector(".carousel__container")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let n = 0

next.addEventListener("click", () => {
    n++
    if (n >= carouselContainer.childElementCount) {
        n = 0
    }
    carouselContainer.style.transform = `translateX(-${n}00%)`
})


prev.addEventListener("click", () => {
    n--
    if (n < 0) {
        n = carouselContainer.childElementCount-1
    }
    carouselContainer.style.transform = `translateX(-${n}00%)`
}) 

items[0].addEventListener("mouseenter", ()=>{
    home.style.height = "150px"
})
items[0].addEventListener("mouseleave", ()=>{
    home.style.height = "0px"
})
items[1].addEventListener("mouseenter", ()=>{
    about.style.height = "150px"
})
items[1].addEventListener("mouseleave", ()=>{
    about.style.height = "0px"
})
items[2].addEventListener("mouseenter", ()=>{
    contact.style.height = "150px"
})
items[2].addEventListener("mouseleave", ()=>{
    contact.style.height = "0px"
})