"use strict"
const nav= document.querySelector(".nav");
const bars=document.querySelector(".material-symbols-outlined");

bars.addEventListener("click",()=>{
    if(nav.classList.contains("nav-active")){
      nav.classList.remove("nav-active");
    //   bars.classList.add("material-symbols-outlined-active")
    }
    else{
        nav.classList.add("nav-active");
    }
})