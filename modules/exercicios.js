export default function exercicios() {
    const h1 = document.querySelector("h1")
    let i = 0;
    let lista = ["a", "b", "c", "d", "e", "f", "g", "h"];



    for (let i = 0; i < lista.length; i++) {
        const mudar = setInterval(() => {
            h1.classList.add(lista[i])
        }, 500 * i)
    }}
// }
// const fundo = document.querySelector('.colorir');
// const iniciar = document.querySelector('.start');
// const pausar = document.querySelector('.pause');
// const tempo= document.querySelector('.tempo');
// const atualizar= document.querySelector('.atualizar');
// let contador = 0;
// let timer = 0;
// iniciar.addEventListener('click', iniciarTempo);
// pausar.addEventListener('click', pausarTempo);
// atualizar.addEventListener('click', atualizarTempo);

// function iniciarTempo(){
//     timer = setInterval(() => {
//        tempo.innerText = contador ++;
//     }, 500);
//     iniciar.setAttribute('disabled', '')

// }
// function pausarTempo(){
//     clearInterval(timer)
//     iniciar.removeAttribute('disabled');
// };
// function atualizarTempo(){
//     tempo.innerText = 0;
//     contador = 0;
    
// }

// function MudarFundo(){
//     fundo.classList.toggle("b");
// }
// iniciar.addEventListener('click', MudarFundo)


// const mudaCor = setInterval(MudarFundo , 200)