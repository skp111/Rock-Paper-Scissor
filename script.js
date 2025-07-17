let userScore = 0
let compScore = 0

let msg=document.querySelector('#msg')
const showWinner = (userwin) => {
    if(userwin){
        //win
        console.log('You Win!!')
        msg.innerText = 'You Win!!'
        userScore += 1
        document.querySelector('#user-score').innerText = userScore
    }
    else{
        //lose
        console.log('You Lose!!')
        msg.innerText = 'You Lose!!'
        compScore += 1
        document.querySelector('#comp-score').innerText = compScore
    }
}

const genCompChoice = () => {
    let options=['rock','paper','scissor']
    let randomIndex = Math.floor(Math.random() * 3)
    let compChoice = options[randomIndex]
    return compChoice
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice()
    console.log(`compChoice = ${compChoice}`)

    if(userChoice === compChoice){
        //draw
        console.log('Game Was Draw')
        msg.innerText = 'Game was Draw'
    }
    else{
        let userwin = true
        if(userChoice === 'rock'){
            //paper , scissor
            userwin = compChoice === 'paper' ? false:true
        }
        else if(userChoice === 'paper'){
            //scissor , rock
            userwin = compChoice === 'scissor' ? false:true
        }
        else{
            //rock , paper
            userwin = compChoice === 'rock' ? false:true
        }
        showWinner(userwin)
    }
}

let choices = document.querySelectorAll('.choice')
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id')
        console.log(`UserChoice = ${userChoice}`)
        playGame(userChoice)
    })
});