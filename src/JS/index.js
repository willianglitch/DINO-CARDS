/* 
OBJETIVO 1 - QUANDO FOR CLICADO NA SETA DE AVANÇAR TROQUE DE CARD.

    PASSO 01 = DAR UM JEITO DE PEGAR O ELEMENTO DO BUTÃO QUE ESTÁ NO HTML DA SETA AVANÇAR .
    PASSO 02 = DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA AVANÇAR.
    PASSO 03 = FAZER APARECER O PROXIMO CARD DA LISTA.
    PASSO 04 = BUSCAR O  CARD SELECIONADO E ESCONDE.

OBJETIVO 2 - QUANDO CLICAR NA SETA VOLTAR , MOSTRAR O CARD ANTERIOR

    PASSO 01 = DAR UM JEITO DE PEGAR O ELEMENTO DO BUTÃO QUE ESTÁ NO HTML DA SETA VOLTAR .
    PASSO 02 = DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA VOLTAR.
    PASSO 03 = FAZER APARECER O CARD ANTERIOR DA LISTA.
    PASSO 04 = BUSCAR O  CARD SELECIONADO E ESCONDE.

*/


const setaAvancar = document.getElementById('setaAvancar');
const setaVoltar = document.getElementById('setaVoltar')
const cards = document.querySelectorAll('.card');
let primeiroCard = 0;

function esconderCardSelecionado (){
    const cardSelecionado = document.querySelector('.selecionado')
    cardSelecionado.classList.remove('selecionado')
};

function mostrarCard(){
    cards[primeiroCard].classList.add('selecionado');
}
setaAvancar.addEventListener('click',function (){

    if(primeiroCard === cards.length - 1) return;

    primeiroCard++;
    mostrarCard()
    
    esconderCardSelecionado()
});

setaVoltar.addEventListener('click',function (){
    if(primeiroCard === 0) return;

    esconderCardSelecionado()

    primeiroCard--;
    mostrarCard()
    
});