const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player');

const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

let firstCard = "";
let secondCard = ""; 


const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length == 20 ) {
        clearInterval(this.loop);
        alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);

    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter == secondCharacter) {
     
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
        

    } else {
          
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
            
            
        },1000);




    }


}


const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    } 

    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}





const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//function para criar as cartas
const createCards = (character) => {

    const card = createElement('div', 'card') //crriar uma tag no html
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${character}.png')`

    card.appendChild(front) //appendChild sempre vai adicionar no final
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort(( ) => Math.random() - 0.5);

    //Math.random() - 0.5; //retorna um numero aleatorio entre 0 e 1, mas nunca vai ser 1
    //esse - 0.5 pode ser que gere um numero aleatorio positivo ou negativo

    shuffledArray.forEach((character) => {

        const card = createCards(character);
        grid.appendChild(card);
        
    });
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = timer.innerHTML;
        const stopwatch = parseInt(currentTime) + 1;
        document.querySelector('.timer').innerHTML = stopwatch;
    }, 1000)
}

window.onload = () => {
    //executar algo quando a janela tiver carregado

    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;
    startTimer();
    
    loadGame();
}
















