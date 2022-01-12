import outsideClick from "./outsideclick.js";

export default function initDropdown() {
    const drop = document.querySelectorAll('[data-dropdown]');
    const eventos = ['touchstart', 'click']
;
    drop.forEach(menu => {
       eventos.forEach((useEvent) => {
            menu.addEventListener(useEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle("active");
        outsideClick(this, eventos, () => {
            this.classList.remove('active')
            
        })
    }


}






