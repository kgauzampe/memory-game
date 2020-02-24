const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false;
let firstCard, secondCard;
let numOfFlips = 1;
let numOfCards = 6;

function flipCard(){
    
    if (numOfFlips > 2 )  return; // restricting flips

    numOfFlips++;
    
  this.classList.add('flip');

  if (!cardFlipped){
    cardFlipped = true; // First click
    firstCard = this;
    return;
} else{
    cardFlipped = false; // second click
    secondCard = this;
}

match()

}

function match(){
    
   // checking if cards match
   if(firstCard.childNodes[3].src == secondCard.childNodes[3].src){
    firstCard.removeEventListener('click',flipCard); // if its a match
    secondCard.removeEventListener('click',flipCard);
    numOfFlips = 1;
    numOfCards --;

} else{
    // if its not a match
        setTimeout(() => {
        firstCard.classList.remove('flip');  // flipback cards that dont match
        secondCard.classList.remove('flip');
        numOfFlips = 1;
        console.log('flipback');
    }, 1500);

   
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
    
    if (numOfCards > 0){
        timer.innerHTML = count++;
    }
    else{
        alert("Victory is yours!!!!");
        window.location = window.location.href;
    }
}, 1000);
module.exports = {
    flipCard,
    match,
    shuffle
}