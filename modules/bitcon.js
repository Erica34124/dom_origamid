export default function bitcoinApi() {}

function pegarApiThen(){
    fetch('https://blockchain.info/ticker').then(Response =>Response.json())
   .then(retorno =>{
    console.log(retorno.BRL.sell)
    const preco = document.querySelector('.btc');
    preco.innerText = (1000/retorno.BRL.sell).toFixed(4)
   }).catch(erro =>{
       console.log(estaErradoBurro(erro))
   })
   
}
pegarApiThen();



