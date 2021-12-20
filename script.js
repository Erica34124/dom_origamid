//nav scroll-suave
function scrollSuave() {

    const navSuave = document.querySelectorAll(".js-scroll a[href^='#']");

    function scrollSessao(evento) {
        evento.preventDefault();

        const href = evento.currentTarget.getAttribute("href");
        const sessao = document.querySelector(href);
        sessao.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })

        // const topo = sessao.offsetTop;
        // window.scrollTo({
        //     top: "topo",
        //     behavior: "smooth",

        // });
    }

    navSuave.forEach((e) => {
        e.addEventListener('click', scrollSessao)
    });
}
scrollSuave();

// navegação
function iniciarNav() {
    const animais = document.querySelectorAll(".js-animais li");
    animais[0].classList.add("ativo")

    const descricao = document.querySelectorAll(".js-descricao section");
    descricao[0].classList.add("ativo")

    if (animais.length && descricao.length) {
        const ativar = (i) => {
            descricao.forEach((p) => {
                p.classList.remove("ativo")
            });
            descricao[i].classList.add("ativo")
        }

        animais.forEach((a, index) => {
            a.addEventListener("click", () => {
                ativar(index)
            })
        })
    }


}
iniciarNav();
// Animando Faq

function animarFaq() {
    const dt = document.querySelectorAll(".js-accordion dt");
    dt[0].classList.add("ativo");
    dt[0].nextElementSibling.classList.add("ativo");
    if (dt.length) {

        function pegarDt() {
            this.classList.toggle("ativo");
            this.nextElementSibling.classList.toggle("ativo");
        }
        dt.forEach((item) => {
            item.addEventListener("click", pegarDt);
        });
    }
}
animarFaq();

// anima scroll

const elementos = document.querySelectorAll(".js-scroll");

    const metade = window.innerHeight * 0.6;
    

    function anima() {
        elementos.forEach((e) => {
            const topoSessao = e.getBoundingClientRect().top;
            const sessaoVisisvel = (topoSessao - metade) ;
          
           
            if (sessaoVisisvel < 0) {
                e.classList.add("ativo");
                console.log("ativo")
            }
            else
                elementos.classList.remove("ativo");
                console.log("ativo removido")
        });
    }
    window.addEventListener("scroll", anima);



