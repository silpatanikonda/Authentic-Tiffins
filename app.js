const mobile=document.querySelector('#toggle-btn');
const navbar=document.querySelector('#sidebar-toggle');

mobile.addEventListener("click",onToggleClick);

function onToggleClick() {
    if (!navbar.classList.contains("open")){
        navbar.classList.add("open"); 
    }
    else{
        navbar.classList.remove("open"); 
    }
}