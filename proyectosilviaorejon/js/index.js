'use strict';

/*  Constantes con querySelector para seleccionar la etiqueta*/

const headerMenu = document.querySelector(".Header-menu")
const headerUl = document.querySelector(".Ul-header")
const headerH1 = document.querySelector(".H1")

console.log({headerUl , headerMenu , headerH1}) 

    /*  Al hacer click en el menu, el ul se despliega */

      if (headerMenu && headerUl) {
        headerMenu.addEventListener("click", () => {
          headerUl.classList.toggle("isVisible")
          document.body.classList.toggle("no-scroll")
      
          headerH1.classList.toggle("isVisible")
        });
      }



/* Al ser una lista selecciono ALL para que afecte a todos los elementos*/ 

const hamburguesas = document.querySelectorAll(".Li-hamburguesas") 

    hamburguesas.forEach(hamburguesa => { 
        hamburguesa.addEventListener("click", () => { 
        
        /* Remove en isActive para eliminar la imagen actual */ 
        document.querySelectorAll(".P-carta").forEach(p => { p.classList.remove("isActive") }) 
        /* Add en isActive para agregar imagen con más información */ 

        const ingrediente = hamburguesa.querySelector(".P-carta") 
        ingrediente.classList.add("isActive") 
        })    
    }) 
        
        /* Console para mostrar el código en la consola de js */ 

    console.log({hamburguesas, ingredientes})