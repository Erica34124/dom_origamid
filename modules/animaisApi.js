import numeros from "./numeros.js";
export default function animaisApi() {

async function pegarApi(url) {
    const pegarApi = await fetch(url);
    const passeJson = await pegarApi.json();
    const resposta = passeJson;
    const animaisGrid = document.querySelector('.numeros-grid');
    resposta.forEach(element => {
        const criarlista = criarAnimal(element);
        animaisGrid.appendChild(criarlista);
    } );
    numeros();
}

function criarAnimal(e) {
    const criarDiv = document.createElement('div');
    criarDiv.classList.add('numero-animal');
    criarDiv.innerHTML = `<h3>${e.especie}</h3><span data-numero>${e.total}</span>`;

    return criarDiv;

}
pegarApi('./animais.json');
}
