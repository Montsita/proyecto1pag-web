async function cargarArchivoJSON1(uuid) {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");  
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
  
      const proyectos = await response.json();

      let title = document.getElementById("titleP");
      let subtitle = document.getElementById("subTitleP");
      let date = document.getElementById("dateP");
      let imgP = document.getElementById("imageP");
      let paragraph = document.getElementById("paragraphP");

      title.textContent = proyectos[3].name;
      subtitle.textContent = proyectos[3].description;
      date.innerHTML = `Completed on <span style="color: gray;">${proyectos[3].completed_on}</span>`;
      imgP.src = proyectos[3].image;
      paragraph.innerHTML = proyectos[3].content; 

      // switch (uuid) {
      //   case 1:
      //     title = document.getElementById("titleP");
      //     subtitle = document.getElementById("subTitleP");
      //     date = document.getElementById("dateP");
      //     imgP = document.getElementById("imageP");
      //     paragraph = document.getElementById("paragraphP");
      //     proyectoFiltrado = proyectos.filter(proyecto => proyecto.uuid === 1);
          
      //     title.textContent = proyectoFiltrado.name;
      //     subtitle.textContent = proyectoFiltrado.description;
      //     date.innerHTML = `Completed on <span style="color: gray;">${proyectoFiltrado.completed_on}</span>`;      
      //     imgP.src = proyectoFiltrado.image;
      //     paragraph.innerHTML = proyectoFiltrado.content;
      //     break;

      //   case 2:
      //     title = document.getElementById("titleP");
      //     subtitle = document.getElementById("subTitleP");
      //     date = document.getElementById("dateP");
      //     imgP = document.getElementById("imageP");
      //     paragraph = document.getElementById("paragraphP");
      //     proyectoFiltrado = proyectos.filter(proyecto => proyecto.uuid === 2);
          
      //     title.textContent = proyectoFiltrado.name;
      //     subtitle.textContent = proyectoFiltrado.description;
      //     date.innerHTML = `Completed on <span style="color: gray;">${proyectoFiltrado.completed_on}</span>`;      
      //     imgP.src = proyectoFiltrado.image;
      //     paragraph.innerHTML = proyectoFiltrado.content;          
      //     break;

      //   case 3:
      //     title = document.getElementById("titleP");
      //     subtitle = document.getElementById("subTitleP");
      //     date = document.getElementById("dateP");
      //     imgP = document.getElementById("imageP");
      //     paragraph = document.getElementById("paragraphP");
      //     proyectoFiltrado = proyectos.filter(proyecto => proyecto.uuid === 3);
          
      //     title.textContent = proyectoFiltrado.name;
      //     subtitle.textContent = proyectoFiltrado.description;
      //     date.innerHTML = `Completed on <span style="color: gray;">${proyectoFiltrado.completed_on}</span>`;      
      //     imgP.src = proyectoFiltrado.image;
      //     paragraph.innerHTML = proyectoFiltrado.content; 
      //     break;

      //   case 4:
      //     title = document.getElementById("titleP");
      //     subtitle = document.getElementById("subTitleP");
      //     date = document.getElementById("dateP");
      //     imgP = document.getElementById("imageP");
      //     paragraph = document.getElementById("paragraphP");
      //     proyectoFiltrado = proyectos.filter(proyecto => proyecto.uuid === 4);
          
      //     title.textContent = proyectoFiltrado.name;
      //     subtitle.textContent = proyectoFiltrado.description;
      //     date.innerHTML = `Completed on <span style="color: gray;">${proyectoFiltrado.completed_on}</span>`;      
      //     imgP.src = proyectoFiltrado.image;
      //     paragraph.innerHTML = proyectoFiltrado.content;           
      //     break;
      //   default:
      //     console.log("No hay información para cargar");
      //     break;
      // }

      console.log(proyectos);

      const proyectoFiltrado = proyectos.filter(proyecto => proyecto.uuid === "1");
  
      console.log(proyectoFiltrado);

    } catch (error) {
      console.error("Error:", error);
    }
}
// cargarArchivoJSON1(2);

// const project1 = document.querySelector('.Projecta1');
// const project2 = document.querySelector('.Projecta2');
// const project3 = document.querySelector('.Projecta3');

// project1.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     const uuid = "1";
//     cargarArchivoJSON1(uuid);
// });

// project2.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     const uuid = "2";
//     cargarArchivoJSON1(uuid);
// });

// project3.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     const uuid = "3";
//     cargarArchivoJSON1(uuid);
// });

// 0 Descargarte los datos de la API
// 1º Acceder al número de la id de la url. ?id=2 -> Quiero extraer el número 2. (Buscar como extraer info de una url)
// 2º Crear el artículo principal usando la id 2.
// 3º Creamos un array con los artículos restantes. Si hemos usado la id 2, creamos un array con las ids = 1, 3, 4
// 4º Recorremos el array para crear una card por cada elemento del array.