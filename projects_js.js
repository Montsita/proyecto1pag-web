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
      let idNum = Number(id);

      let title = document.getElementById("titleP");
      let subtitle = document.getElementById("subTitleP");
      let date = document.getElementById("dateP");
      let imgP = document.getElementById("imageP");
      let paragraph = document.getElementById("paragraphP");
      let link1 = document.getElementById("link1");
      let link2 = document.getElementById("link2");
      let link3 = document.getElementById("link3");
      let img1 = document.getElementById("img1");
      let img2 = document.getElementById("img2");
      let img3 = document.getElementById("img3");
      let title1 = document.getElementById("title1");
      let title2 = document.getElementById("title2");
      let title3 = document.getElementById("title3");
      let subTitle1 = document.getElementById("subTitle1");
      let subTitle2 = document.getElementById("subTitle2");
      let subTitle3 = document.getElementById("subTitle3");
      let secondUrl1 = document.getElementById("secondUrl1");
      let secondUrl2 = document.getElementById("secondUrl2");
      let secondUrl3 = document.getElementById("secondUrl3");

      for (let i = 0; i<=idNum; i++){
        if(idNum === 0){
          title.textContent = proyectos[3].name;
          subtitle.textContent = proyectos[3].description;
          date.innerHTML = `Completed on <span style="color: gray;">${proyectos[3].completed_on}</span>`;
          imgP.src = proyectos[3].image;
          paragraph.innerHTML = proyectos[3].content; 

          link1.href = "/projects/projects.html?id=1";
          img1.src = proyectos[2].image;
          title1.textContent = proyectos[2].name;
          subTitle1.textContent = proyectos[2].description;
          secondUrl1.href = "/projects/projects.html?id=1";
          
          link2.href = "/projects/projects.html?id=2";
          img2.src = proyectos[1].image;
          title2.textContent = proyectos[1].name;
          subTitle2.textContent = proyectos[1].description;
          secondUrl2.href = "/projects/projects.html?id=2";

          link3.href = "/projects/projects.html?id=3";
          img3.src = proyectos[0].image;
          title3.textContent = proyectos[0].name;
          subTitle3.textContent = proyectos[0].description;
          secondUrl3.href = "/projects/projects.html?id=3";
        }

        if(idNum === 1){
          title.textContent = proyectos[2].name;
          subtitle.textContent = proyectos[2].description;
          date.innerHTML = `Completed on <span style="color: gray;">${proyectos[2].completed_on}</span>`;
          imgP.src = proyectos[2].image;
          paragraph.innerHTML = proyectos[2].content; 

          link1.href = "./projects/projects.html?id=2";
          img1.src = proyectos[1].image;
          title1.textContent = proyectos[1].name;
          subTitle1.textContent = proyectos[1].description;
          secondUrl1.href = "./projects/projects.html?id=2";
          
          link2.href = "./projects/projects.html?id=3";
          img2.src = proyectos[0].image;
          title2.textContent = proyectos[0].name;
          subTitle2.textContent = proyectos[0].description;
          secondUrl2.href = "./projects/projects.html?id=3";

          link3.href = "./projects/projects.html?id=0";
          img3.src = proyectos[3].image;
          title3.textContent = proyectos[3].name;
          subTitle3.textContent = proyectos[3].description;
          secondUrl3.href = "./projects/projects.html?id=0";
          
        }

        if(idNum === 2){
          title.textContent = proyectos[1].name;
          subtitle.textContent = proyectos[1].description;
          date.innerHTML = `Completed on <span style="color: gray;">${proyectos[1].completed_on}</span>`;
          imgP.src = proyectos[1].image;
          paragraph.innerHTML = proyectos[1].content; 

          link3.href = "./projects/projects.html?id=3";
          img1.src = proyectos[0].image;
          title1.textContent = proyectos[0].name;
          subTitle1.textContent = proyectos[0].description;
          secondUrl1.href = "./projects/projects.html?id=3";
          
          link2.href = "./projects/projects.html?id=0";
          img2.src = proyectos[3].image;
          title2.textContent = proyectos[3].name;
          subTitle2.textContent = proyectos[3].description;
          secondUrl2.href = "./projects/projects.html?id=0";

          link3.href = "./projects/projects.html?id=1";
          img3.src = proyectos[2].image;
          title3.textContent = proyectos[2].name;
          subTitle3.textContent = proyectos[2].description;
          secondUrl3.href = "./projects/projects.html?id=1";
        }

        if(idNum === 3){
          title.textContent = proyectos[0].name;
          subtitle.textContent = proyectos[0].description;
          date.innerHTML = `Completed on <span style="color: gray;">${proyectos[0].completed_on}</span>`;
          imgP.src = proyectos[0].image;
          paragraph.innerHTML = proyectos[0].content; 

          link1.href = "./projects/projects.html?id=2";
          img1.src = proyectos[1].image;
          title1.textContent = proyectos[1].name;
          subTitle1.textContent = proyectos[1].description;
          secondUrl1.href = "./projects/projects.html?id=2";
          
          link2.href = "./projects/projects.html?id=1";
          img2.src = proyectos[2].image;
          title2.textContent = proyectos[2].name;
          subTitle2.textContent = proyectos[2].description;
          secondUrl2.href = "./projects/projects.html?id=1";

          link3.href = "./projects/projects.html?id=0";
          img3.src = proyectos[3].image;
          title3.textContent = proyectos[3].name;
          subTitle3.textContent = proyectos[3].description;
          secondUrl3.href = "./projects/projects.html?id=0";
        }

      }

    } catch (error) {
      console.error("Error:", error);
    }
}
cargarArchivoJSON1(); 