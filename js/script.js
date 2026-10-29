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
        role:"Developer, responsible for building and styling the website.",
        details: "A personal portfolio showcasing my skills and projects. It includes interactive features such as dark mode, collapsible skill lists and project cards.",
        technologies : ["HTML","CSS","Javascript"]
      },
    {
        name :"DeepSight",
        description :"An AI-powered web platform designed to assist ophthalmologists with the preliminary analysis of eye scans while keeping the final diagnosis with the ophthalmologist.",
        role :"Front-end developer,focused on building a responsive and a user-friendly web application.",
        details: "Collaborated with a team to analyse and design a web-based healthcare platform for the preliminary detection of eye diseases using Artificial Intelligence. Focused mainly on the front-end development of the system and worked with team members to ensure the interface aligned with the system requirements.",
        technologies :["Python","HTML"]
    }

]
const projectsContainer = document.querySelector(".projects-container");

projects.forEach(function(project){
    const article = document.createElement("article");
    const button = document.createElement("button");
    button.textContent="View Details";
    button.dataset.project = project.name;
    const detailsParagraph = document.createElement("p");
    detailsParagraph.textContent=project.details;
    detailsParagraph.classList.add("hidden");
    button.addEventListener("click",function(){
     detailsParagraph.classList.toggle("hidden")
     if(detailsParagraph.classList.contains("hidden")){
        button.textContent="View Details"
     }
     else{button.textContent="Hide Details"}
    });
    const list = document.createElement("ul");
    project.technologies.forEach(function(technology){
        const item =document.createElement("li");
        item.textContent = technology;
        list.append(item);
    });
    article.innerHTML = `<h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p>Role: ${project.role}</p>
                    <h4>Technologies</h4>
                    `;
    article.append(list);
    article.append(button);
    article.append(detailsParagraph);
    projectsContainer.append(article);
});
