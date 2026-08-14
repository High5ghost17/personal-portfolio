console.log("Welcome to Khwatsi's Portfolio");
const projectButton = document.getElementById("project-button");
const projectsSection = document.getElementById("projects");

projectButton.addEventListener("click", function () {
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });
});
 const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
    themeToggle.textContent="Light Mode";
}
else{
    themeToggle.textContent="Dark Mode";
}
});

const skillToggles=document.querySelectorAll(".skill-toggle");
skillToggles.forEach(function(button){
const targetId=button.dataset.target;
const targetList=document.getElementById(targetId);
const arrow = button.querySelector(".arrow");
button.addEventListener("click",function(){
    targetList.classList.toggle("hidden");
    if(targetList.classList.contains("hidden")){
        arrow.textContent="▶";
    }else {
    arrow.textContent = "▼";
    }
   
})
});