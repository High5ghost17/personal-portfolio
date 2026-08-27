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
const projects =[
    {
        name : "portfolio projects",
        description :"A responsive personal portfolio website showcasing my skills,projects, and journey toward becoming a software engineer.",
        technologies : ["HTML","CSS","Javascript"]       
    },
    {
        name :"DeepSight",
        description :"An AI-powered web platform designed to assist ophthalmologists with the preliminary analysis of eye scans while keeping the final diagnosis with the ophthalmologist.",
        technologies :["Python","HTML"]
    }

]
const projectsContainer = document.querySelector(".projects-container");
const article = document.createElement("article");


projects.forEach(function(project){
    const article = document.createElement("article");
    const list = document.createElement("ul");
    project.technologies.forEach(function(technology){
        const item =document.createElement("li");
        item.textContent = technology;
        list.append(item);
    });
    article.innerHTML = `<h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <h4>Technologies</h4>
                    `;
    article.append(list);
    projectsContainer.append(article);
});
