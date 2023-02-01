const items = document.querySelectorAll(".item")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")

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