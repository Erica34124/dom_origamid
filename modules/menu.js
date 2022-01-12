import outsideClick from "./outsideclick.js"


export default function menu() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

if(menuButton){
    function abrir(){
        menuButton.classList.toggle("active");
        menuList.classList.toggle("active");
        outsideClick(eventos,  ()=>{
            console.log("teste")

            menuButton.classList.remove("active");
            menuList.classList.remove("active");


        })
    }
    eventos.forEach((event)=>{
        menuButton.addEventListener(event,  abrir)
    })
}
    
    }
   