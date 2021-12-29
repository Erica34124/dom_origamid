export default function initModal() {
    const boAbrir = document.querySelector("[data-modal='abrir']");
    const boFechar = document.querySelector("[data-modal='fechar']");
    const boContainer = document.querySelector("[data-modal='container ']");


    if (boAbrir && boFechar && boContainer) {
        const abrir = (e) => {
            e.preventDefault();
            boContainer.classList.add("ativar")

        }
        const fechar = (e) => {
            e.preventDefault()
            boContainer.classList.remove("ativar")
        }
        const clickFora = (e) => {
            if (e.target === boContainer) {
                fechar(e);
            }

        }
        boAbrir.addEventListener("click", abrir);
        boFechar.addEventListener("click", fechar);
        boContainer.addEventListener("click", clickFora);
    }
}