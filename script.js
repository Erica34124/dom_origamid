//nav scroll-suave
function scrollSuave() {

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
// scrollSuave();


// navegação
function animaisDescricao() {
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
            });
        });
    }
}
animaisDescricao();

// Animando Faq

function MostraRespostasFaq() {
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
MostraRespostasFaq();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScroll();

// anima scroll precisa rever

// function animaScroll() {
//     const elementos = document.querySelectorAll(".role");
//     const meio = window.innerHeight *0.6;
//     const listaScroll = [];

//     const anima = ()=>{
//         elementos.forEach((e)=>{
//             const sessaoTopo = e.getBoundingClientRect().top - meio;
//             if(sessaoTopo < 0){
//                 e.classList.add("ativo");
//             }
//         })
//     }
//      anima
//     window.addEventListener("scroll", anima);
// }
// animaScroll();
    
    // const metade = window.innerHeight ;
    // console.log("meio",metade)


    // function anima() {
    //     elementos.forEach((e) => {
    //         const topoSessao = e.offsetTop;
    //         console.log("topo", topoSessao, e)



    //         if (topoSessao < 0) {
    //             e.classList.add("testeAtivo");
     

    //         }
    //         else {
    //             e.classList.remove("testeAtivo");
 
    //         }

    //     });
    // }


