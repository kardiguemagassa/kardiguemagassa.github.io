const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const diceImg = document.querySelector('.dice')
const newBtn = document.querySelector('.new-btn')
const rollBtn = document.querySelector('.roll-btn')
const holdBtn = document.querySelector('.hold-btn')
const maxScore1 = document.getElementById("score-max1")
const maxScore2 = document.getElementById("score-max2")
const score = [0, 0]

let currentScore = 0
let activePlayer = 0
let isPlaying = true

const switchPlayer = function () {
    currentScore = 0
    document.getElementById(`current${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer == 0 ? 1 : 0;
    player1.classList.toggle('player-active')
    player2.classList.toggle('player-active')
}; 

rollBtn.addEventListener('click',() =>{
    if (isPlaying) {
        const randomNumber = Math.floor(Math.random()*6)+ 1
        diceImg.src =`Ressource/dice${randomNumber}.png`
        if (randomNumber !==1) {
             currentScore += randomNumber
            document.getElementById(`current${activePlayer}`).textContent = currentScore
}   else {
         switchPlayer()
        }
    }
});

 //Sauvegarde score
 let add = 0;
holdBtn.addEventListener('click',() =>{
    
    if (isPlaying) {
        score[activePlayer] +=currentScore
        console.log(score[activePlayer])
        document.getElementById(`score${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] >= 100) {
            isPlaying = false;
            document.getElementById(`score${activePlayer}`).textContent = 'Win! 🏆'
            switchPlayer();
            document.getElementById(`score${activePlayer}`).textContent = 'Lost! 💩'
            add = activePlayer == 1 ? 0 : 1

            document.querySelector('.player1').classList.remove('player-active')
            document.querySelector('.player2').classList.remove('player-active')
            maxScore1.remove()
            maxScore2.remove()

        } else {
            switchPlayer()
            }
     }
});

// NEWGAME
newBtn.addEventListener('click',() =>{
    isPlaying = true;
    document.querySelector(`.player${activePlayer}`)
    activePlayer = 0;
    document.querySelector('.player1').classList.add('player_active')
    document.querySelector('.player2').classList.remove('player_active')
    score[0] =0;
    score[1] =0;
    document.getElementById('score0').textContent =0
    document.getElementById('score1').textContent =0
});