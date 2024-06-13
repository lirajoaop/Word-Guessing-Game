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

document.getElementById("display-word").textContent = displayWord

function guessLetter (){
    let inputElement = document.getElementById("letter-input")

    // Para checar input vazio
    if(!inputElement.value){
        alert('Caixa vazia. Por favor, adicione uma letra.')
        return
    }
    // transformar em letra minúscula
    let letter = inputElement.value.toLowerCase()

    //Limpando o campo de input
    inputElement.value = ''

    //Checar se a letra já foi adivinhada
    if(guessedList.includes(letter)){
        alert('Você já adivinhou essa letra!')
        return
    }

}
