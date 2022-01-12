export default function initAnimaisDescricao() {
    const animais = document.querySelectorAll(".animais-lista li");
    
    animais[0].classList.add("ativo");

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
