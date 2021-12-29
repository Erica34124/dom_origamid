export default function initScrollSuave() {

    const navSuave = document.querySelectorAll(".js-scroll a[href^='#']");

    function scrollSessao(evento) {
        evento.preventDefault();
        const href = evento.currentTarget.getAttribute("href");
        const sessao = document.querySelector(href)

        const topo = sessao.offsetTop;
        sessao.scrollIntoView({
            top: "start",
            behavior: "smooth"
        })
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })

    }
    navSuave.forEach(link => {
        link.addEventListener("click", scrollSessao)
    })
}


