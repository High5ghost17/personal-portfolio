console.log("Welcome to Khwatsi's Portfolio");
const projectButton = document.getElementById("project-button");
const projectsSection = document.getElementById("projects");

projectButton.addEventListener("click", function () {
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });
});