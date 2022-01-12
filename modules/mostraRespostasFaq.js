export default function initMostraRespostasFaq() {
    let dt = document.querySelectorAll(".js-accordion dt");
    dt[0].classList.add("ativo");
    dt[0].nextElementSibling.classList.add("ativo");
    
    if (dt.length) {

        function pegarDt() {
            this.classList.toggle("ativo");
            this.nextElementSibling.classList.toggle("ativo");
        };
        dt.forEach((item) => {
            item.addEventListener("click", pegarDt);
        });
    }
}


