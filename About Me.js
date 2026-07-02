const bar = document.querySelector('.AMNavba')
const opener = document.querySelector('.AMnavimg')
const items = document.querySelectorAll('.AMnavitem')
const entirePage = document.querySelector('.wholeabooutme')
const ids = ["postone","About-Me","Project","Resume","id5"]

// opener.addEventListener("click", function () {
//     bar.style.display = "flex"

// })

// items.forEach((section,index) =>{
// section.onclick = function(){
//     bar.style.display ="none"
//     bulletin.style.animation = "Minimize 1.5s ease-in-out forwards"
//     setTimeout(function(){
//         bulletin.style.display = "none"
//         const targetSticky = document.getElementById(ids[index])
//         targetSticky.style.display = "flex"
//         targetSticky.style.animation = "Maximize 1.4s ease-in-out forwards"
//     },1400)


    
// }


// })



// ids.forEach((section,index) => {
// section.onclick = function(){
//     window.location.href = `#${ids[index]}`

// }
 
// })





const text2 = "About Me";
const element2 = document.getElementById("aboutme");
let index2 = 0;

function type2() {
    if (index2 < text2.length) {
        element2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(type2, 110);
    }
}

type2();