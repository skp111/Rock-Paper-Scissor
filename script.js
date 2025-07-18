let userScore = 0
let compScore = 0

let msg=document.querySelector('#msg')
const showWinner = (userwin) => {
    if(userwin){
        //win
        console.log('You Win!!')
        msg.innerText = 'You Win!!'
        msg.style.backgroundColor = 'green'
        userScore += 1
        document.querySelector('#user-score').innerText = userScore
    }
    else{
        //lose
        console.log('You Lose!!')
        msg.innerText = 'You Lose!!'
        msg.style.backgroundColor = 'red'
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
        msg.style.backgroundColor = '#081b31'
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

let h1=document.querySelector('h1')

let btn = document.querySelector('#btn')
let theme = document.querySelector('body')
btn.addEventListener('click',() => {
    theme.classList.toggle('light')
    if (theme.classList.contains('light')) {
        theme.style.backgroundColor = 'black'
        theme.style.color = 'white'
        btn.children[0].classList.replace('fa-moon','fa-sun')
        btn.style.color = 'yellow'
    }
    else{
        theme.style.backgroundColor = 'white'
        theme.style.color = 'black'
        btn.children[0].classList.replace('fa-sun','fa-moon')
        btn.style.color = 'black'
    }
    // h1.style.backgroundColor = '#081b31'
    // h1.style.color = 'white'
    // msg.style.color = 'white'
})

