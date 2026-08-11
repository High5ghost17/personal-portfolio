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
const programmingToggle=document.getElementById("programming-toggle");
const programmingList=document.getElementById("programming-list");
programmingToggle.addEventListener("click",function(){
    programmingList.classList.toggle("hidden");
if (programmingList.classList.contains("hidden")){
    programmingToggle.textContent="Programming Languages ▶";
}
else{
    programmingToggle.textContent="Programming Languages ▼";
}
});