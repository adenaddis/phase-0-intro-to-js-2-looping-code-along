const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names, event) {
    const thankuCards = []
    for(let i= 0; i < names.length; i++) {
   thankuCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return thankuCards
}

// function writecards()
// console.log(writeCards(names, "aniversary"))

function countDown(number) {
    for (let i = number; i >= 0; i--){
        console.log(i)
    }
}
