"use strict"
const nav= document.querySelector(".nav");
const bars=document.querySelector(".material-symbols-outlined");
const main=document.querySelector(".main");

bars.addEventListener("click",()=>{
    if(nav.classList.contains("nav-active")){
      nav.classList.remove("nav-active"); 
    }
    else{
        nav.classList.add("nav-active");
    }
})
main.addEventListener("click",()=>{
  if(!nav.classList.contains("nav-active")){    
    nav.classList.add("nav-active");
    
  }
})