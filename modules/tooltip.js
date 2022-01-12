export default function initToolTip() {

  const mapa = document.querySelectorAll('[data-tooltip]')


  mapa.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);

  })
  function onMouseOver(event) {
    const pegarCaixa = criarToolTip(this);
    onMouseMove.pegarCaixa = pegarCaixa;
    this.addEventListener("mousemove", onMouseMove)

    onMouseLeave.pegarCaixa = pegarCaixa;
    onMouseLeave.Element = this;
    this.addEventListener("mouseleave", onMouseLeave);


  }
  const onMouseLeave = {
    handleEvent() {
      this.pegarCaixa.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  const onMouseMove = {
    handleEvent(event) {
    this.pegarCaixa.style.top = event.pageY + 20 + 'px';
    this.pegarCaixa.style.left = event.pageX + 20 + 'px';
    }
  }

  function criarToolTip(Element) {
    const box = document.createElement('div');
    const texto = Element.getAttribute('aria-label');
    box.classList.add('tooltip');
    box.innerText = texto;
    document.body.appendChild(box)
    return box;


  }
}



