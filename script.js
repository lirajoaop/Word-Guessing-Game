const words = ["banana",
"morango",
"laranja",
"abacaxi",
"melancia",
"acerola",
"manga",
"goiaba",
"tangerina"
]

// Pegando uma palavra aleatória da lista 
let randomIndex = Math.floor(Math.random() * words.length)
let selectedWord = words[randomIndex]

console.log(selectedWord)

let guessedList = []

// Número de espaços com base na palavra selecionada (_)
let displayWord = ''
for (let i = 0; i < selectedWord.length; i++){
    displayWord += '_ '

}

console.log(displayWord)
