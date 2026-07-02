const bar = document.querySelector('.PNavba')
const opener = document.querySelector('.Pnavimg')
const items = document.querySelectorAll('.Pnavitem')
const entirePage = document.querySelector('.Fullprojectpage')
const ids = ["postone","About-Me","Project","Resume","id5"]



// opener.addEventListener("click", function () {
//     bar.style.display = "flex"

// })

// items.forEach((section,index) =>{
// section.onclick = function(){
//     bar.style.display ="none"
//     entirePage.style.animation = "Minimize 1.5s ease-in-out forwards"
//     setTimeout(function(){
//         projectPage.style.display = "none"
//         const targetSticky = document.getElementById(ids[index])
//         targetSticky.style.display = "flex"
//         targetSticky.style.animation = "Maximize 1.4s ease-in-out forwards"
//     },1400)

    
//     //alert(ids[index])
 
    
// }


// })



// ids.forEach((section,index) => {
// section.onclick = function(){
//     window.location.href = `#${ids[index]}`

// }
 
// })



const text3 = "Projects";
const element3 = document.getElementById("myprojects");

let index3 = 0;

function type3() {
    if (index3 < text3.length) {
        element3.textContent += text3.charAt(index3);
        index3++;
        setTimeout(type3, 110);
    }
}

type3(); 