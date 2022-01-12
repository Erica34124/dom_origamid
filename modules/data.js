
export default function data() {
    const funcionamento = document.querySelector('[data-semana]');
    const semana = funcionamento.dataset.semana.split(',').map(Number);
    const hora = funcionamento.dataset.hora.split(',').map(Number);
    const agora = new Date();
    const semanaAgora = agora.getDay();
    const horaAgora = agora.getHours();

    const semanaAberto = (semana.indexOf(semanaAgora) !== -1);
    const horaAberto = (horaAgora >= hora[0]) && (horaAgora< hora[1]);

    if(semanaAberto && horaAberto){
        funcionamento.classList.add('aberto');
    }

    
  }
  



