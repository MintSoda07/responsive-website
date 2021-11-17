window.onload=function(){
    // window load

}
'use strict';

const navbar = document.querySelector('#navbar');
const homebackground = document.querySelector('#home');
const homeBGHight = homebackground.getBoundingClientRect().height;
const arrowUp=document.querySelector(".arrow-up");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    if(window.scrollY<navbarHeight){
        navbar.classList.remove('navbar--dark');
        navbarToggleBtn.classList.remove('resize');
    }else{
        navbar.classList.add('navbar--dark');
        navbarToggleBtn.classList.add('resize');
    }
    if(window.scrollY<1){
        arrowUp.classList.remove('arrow--status');
    }
    if(window.scrollY>homeBGHight/2){
        arrowUp.classList.add('arrow--status');
    }
});

const contactMe = document.querySelector('.home_contact');
contactMe.addEventListener("click",(event)=>{
    scrollClickAction_scrollMove(event)
});
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener("click",(event)=>{
    scrollClickAction_scrollMove(event)
});
arrowUp.addEventListener("click",(event)=>{
    scrollIntoView("#home");
});
function scrollClickAction_scrollMove(event){
    const target=event.target;
    const link=target.dataset.link;
    if(link==null){
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
};
function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
};

//home opacity management
const home=document.querySelector(".home_container");
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    home.style.opacity=1-scrollY/homeHeight;
});


//another NavMenu const :: id 
const navbarMenuID=document.querySelector("#navbar_menu")
//navbar expand menu click action
const navbarToggleBtn=document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener("click",()=>{
    console.log("Clicked!");
    navbarMenuID.classList.toggle("open");
});

const workBtnContainer = document.querySelector(".work_categories");
const projectContainer = document.querySelector(".work_projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projects.forEach((project) => {
        if (filter === "*" || filter === project.dataset.type) {
            project.classList.remove("invisible");
        } else {
            project.classList.add("invisible");
        }
    });
    const active = document.querySelector(".category_btn.selected");
    if (active != null) {
        active.classList.remove("selected");
    }
    e.target.classList.add("selected");
    projectContainer.classList.add("anim-out");
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anim-out");
    }, 300);
});