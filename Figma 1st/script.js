const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header__menu");
const body = document.body; // Add this line
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");     
    toggle.classList.toggle("active");   
    body.classList.toggle("menu-open");
});
alert("Width: " + window.innerWidth + "px");

const dropdownParents = document.querySelectorAll(".has-dropdown");

dropdownParents.forEach(parent => {
    parent.addEventListener("click", (e) => {
        e.stopPropagation(); 
        
        dropdownParents.forEach(item => {
            if (item !== parent) {
                item.classList.remove("active");
            }
        });
        
        parent.classList.toggle("active");
    });
});

headerMenu.addEventListener("click", (e) => {
    if (!e.target.closest('.has-dropdown')) {
        dropdownParents.forEach(parent => {
            parent.classList.remove("active");
        });
    }
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        dropdownParents.forEach(parent => {
            parent.classList.remove("active");
        });
        nav.classList.remove("active");
        toggle.classList.remove("active");
         body.classList.remove("menu-open");
    }
});
function handle425Screen(e) {
    const toggle = document.getElementById("menuToggle");
    const headerRight = document.querySelector(".header__right");
    
    if (e.matches) {
        toggle.removeEventListener("click", existingHandler); 
        toggle.addEventListener("click", mobileHandler);
    } else {
        toggle.removeEventListener("click", mobileHandler);
    }
}
