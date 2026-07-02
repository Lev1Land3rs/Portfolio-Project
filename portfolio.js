const bar = document.querySelector('.Navba')
const opener = document.querySelector('.navimg')
const items = document.querySelectorAll('.navitem')
const ids = ["HomeFrame","AboutMeFrame","ProjectFrame","ContactFrame","ResumeFrame",]
let bulletin = document.querySelector('.bulletinboard')

bulletin.scrollIntoView({
    behavior:"smooth"
})

opener.addEventListener("click", function () {
    // bar.style.display = "flex"
    // or
    // bar.style.display = "none"

    if( bar.style.display === "flex" ){
        bar.style.display = "none"
    } else {
        bar.style.display = "flex"
    }
})

items.forEach((section,index) =>{
section.onclick = function(){
    // bar.style.display ="none"
    // bulletin.style.animation = "Minimize 1.5s ease-in-out forwards"
    setTimeout(function(){
        // bulletin.style.display = "none"
        const targetSticky = document.getElementById(ids[index])
        // targetSticky.style.display = "flex"
        // targetSticky.style.animation = "Maximize 1.4s ease-in-out forwards"
        
    },1400)
    const Target = document.getElementById(ids[index])
    Target.scrollIntoView({
        behavior:"smooth"
    })

    
    //alert(ids[index])

    
}


})



ids.forEach((section,index) => {
section.onclick = function(){
    window.location.href = `#${ids[index]}`

}
 
})




const text = "Levi's Portfolio";
const element = document.getElementById("myportfolio");

let index = 0;

function type() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 110);
    }
}

type();


// const text3 = "Projects";
// const element3 = document.getElementById("myprojects");

// let index3 = 0;

// function type3() {
//     if (index3 < text3.length) {
//         element3.textContent += text3.charAt(index3);
//         index3++;
//         setTimeout(type3, 110);
//     }
// }

// type3();

