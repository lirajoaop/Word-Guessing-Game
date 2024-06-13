const words = ["banana",
"morango",
"laranja",
"abacaxi",
"melancia",
"amora",
"mirtilo",
"uva",
"caju"
]

// Geting random word from the list 
let randomIndex = Math.floor(Math.random() * words.length)
let selectedWord = words[randomIndex]

console.log(selectedWord)

let guessedList = []

