const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false;
let firstCard, secondCard;

function flipCard(){
    
  this.classList.add('flip');

  if (!cardFlipped){
    cardFlipped = true; // First click
    firstCard = this;
    return;
} else{
    cardFlipped = false; // second click
    secondCard = this;

    // checking if cards match
    if(firstCard.childNodes[3].src == secondCard.childNodes[3].src){
        firstCard.removeEventListener('click',flipCard); // if its a match
        secondCard.removeEventListener('click',flipCard);

    } else{
        // if its not a match
            setTimeout(() => {
            firstCard.classList.remove('flip');  // flipback cards that dont match
            secondCard.classList.remove('flip');
        }, 1500);

       console.log('flipback');
    }
}


 
}

(function shuffle() {

    cards.forEach(card => {
  
      let randomPos = Math.floor(Math.random() * 12); // shuffle the cards
  
      card.style.order = randomPos;
  
    });
  
})();

cards.forEach(card => card.addEventListener('click', flipCard));  

let timer = document.getElementById('timer');
let count = 0;

setInterval(function() {
    timer.innerHTML = count++;
}, 1000);
