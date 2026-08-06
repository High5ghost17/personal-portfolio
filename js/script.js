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