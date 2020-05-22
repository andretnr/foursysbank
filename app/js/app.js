const conttroller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', conttroller.adiciona.bind(conttroller));
