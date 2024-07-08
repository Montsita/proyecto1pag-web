async function cargarArchivoJSON1() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");  
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
  
      const proyectos = await response.json();
      
      //extraigo el numero de la id:
      let params = new URLSearchParams(window.location.search);
      let id = params.get('id');

      const bigProject = proyectos.filter((project)=>project.uuid === id)
      const smallProjects = proyectos.filter((project)=>project.uuid != id)
      console.log(bigProject);
      console.log(smallProjects);

      let title = document.getElementById("titleP");
      let subtitle = document.getElementById("subTitleP");
      let date = document.getElementById("dateP");
      let imgP = document.getElementById("imageP");
      let paragraph = document.getElementById("paragraphP");
        
      title.textContent = bigProject[0].name;
      subtitle.textContent = bigProject[0].description;
      date.innerHTML = `Completed on <span style="color: gray;">${bigProject[0].completed_on}</span>`;
      imgP.src = bigProject[0].image;
      paragraph.innerHTML = bigProject[0].content; 

      const sectionProjects = document.querySelector(".article-projects");

      smallProjects.forEach(project => {
        sectionProjects.innerHTML += `
            <a id="link1" href="../projects/projects.html?id=${project.uuid}">
              <div class="projects">  
                  <img id="img1" src="${project.imageURL}" alt="project-image2">
                  <h3 id="title1">${project.name}</h3>
                  <h4 id="subTitle1">${project.description}</h4>
                  <a id="secondUrl1" class= "project-learn"href="../projects/projects.html?id=${project.uuid}">Learn more</a>
              </div>
            </a>
        `
      });
    
    } catch (error) {
      console.error("Error:", error);
    }
}
cargarArchivoJSON1()