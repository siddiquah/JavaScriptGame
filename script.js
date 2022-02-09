var choices = ["✊", "✋", "✌️"]

const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const output = document.getElementById('Result')
const btn = document.getElementById('button')

console.log(player1,player2,output,btn);

const generateChoice = () => {
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}

const insert = (choice1, choice2, result) => {
    player1.innerHTML = choice1
    player2.innerHTML = choice2
    output.innerHTML =result
}

const decide = (a, b) => {
    if(a==="✊" && b==="✊" || a==="✋" && b==="✋" || a==="✌️" && b==="✌️") {
        return "It is a DRAW, try again losers"
    }
    if(a==="✊" && b==="✋" || a==="✌️" && b==="✋" || a==="✊" && b==="✌️") {
        return "yapee! Player 1 won. Lets play again!"
    }
    else {
        return "Hurrah! Player 2 won. One more time!"
    }
}
console.log(decide("✌️","✌️"))
console.log(decide("✊","✌️"))



const play = () => {
    let choice1 = generateChoice()
    let choice2 = generateChoice()
    let result = decide(choice1, choice2)

    insert(choice1,choice2,result)
}

btn.addEventListener("click", play)