let page = document.querySelector(".page")
let sorry = document.querySelector(".sorry")
let inputColor = document.querySelectorAll("ul .add input")[0]
let insertColor1 = document.querySelectorAll("ul .first-color .add button")[0]
let insertColor2 = document.querySelectorAll("ul .second-color .add button")[0]
let lis1 = document.querySelectorAll(".first-color ul li")
let lis2 = document.querySelectorAll(".second-color ul li")
let new1 = document.querySelector(".new-color .color-one")
let new2 = document.querySelector(".new-color .color-two")
let mix = document.querySelector(".mix")


// Check project width
if(window.innerWidth <= 900){
    page.style.display = "none";
    sorry.style.display = "block";
    }
    else{
        page.style.display = "flex";
    sorry.style.display = "none";
    }

window.addEventListener("resize", (e)=>{
    if(window.innerWidth <= 900){
    page.style.display = "none";
    sorry.style.display = "block";
    }
    else{
        page.style.display = "flex";
    sorry.style.display = "none";
    }

})

// Insert Color
insertColor1.addEventListener("click", (e) => {

    lis1.


})


// lis1  ⭕
lis1.forEach( (li) => {
    li.addEventListener("click", (e) => {
        
        // Remove Active
        lis1.forEach((li) => {
            li.classList.remove("active")
        })
        // add active
        li.classList.add("active")

        // change color
        new1.style.backgroundColor = li.style.backgroundColor
        
    })
    
} )

// lis2 ⭕

lis2.forEach( (li) => {
    li.addEventListener("click", (e) => {
        
        // Remove Active
lis2.forEach((li) => {
    li.classList.remove("active")
})
// add active
li.classList.add("active")


// change color
new2.style.backgroundColor = li.style.backgroundColor

})


} )


mix.addEventListener("click", (e) =>{
if (new1.style.width === "200px") {
    new1.style.width = "calc(100% - 20px)"
}
else{
    new1.style.width = "200px"
}

if (new2.style.width === "200px") {
    new2.style.width = "calc(100% - 20px)"
}
else{
    new2.style.width = "200px"
}

})

