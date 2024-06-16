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

//DOM
let inputElement = document.getElementById('letter-input')
let submitButton = document.getElementById('submit-button')

// Pegando uma palavra aleatória da lista 
let randomIndex = Math.floor(Math.random() * words.length)
let selectedWord = words[randomIndex]

let guessedList = []

// Número de espaços com base na palavra selecionada (_)
let displayWord = ''
for (let i = 0; i < selectedWord.length; i++){
    displayWord += '_ '

}

// alinhando JS com HTML 
document.getElementById("displayWord").textContent = displayWord


// Função de adivinhar Letra
function guessLetter (){

    // Para checar input vazio
    if(!inputElement.value){
        alert('Caixa vazia. Por favor, adicione uma letra.')
        return
    }
    // transformar em letra minúscula para igualar em verificação posterior
    let letter = inputElement.value.toLowerCase()

    //Limpando o campo de input
    inputElement.value = ''

    //Checar se a letra já foi adivinhada
    if(guessedList.includes(letter)){
        alert('Você já adivinhou essa letra!')
        return
    }

    // Adicionando a letra adivinhada ao array de letras
    guessedList.push(letter)

    //Atualizar o display
    updateDisplay()
}

// Função para atualizar o display
function updateDisplay(){

let updatedDisplay = ''
let allLettersGuessed = true

for (let i = 0; i < selectedWord.length; i++){
    if (guessedList.includes(selectedWord[i])){
        updatedDisplay += selectedWord[i] + ' '
    } else {
        updatedDisplay += '_ '
        allLettersGuessed = false
    }
}

document.getElementById('displayWord').textContent = updatedDisplay

//checar se todas as letras foram adivinhadas
if(allLettersGuessed){
    alert('Parabéns, você adivinhou a palavra corretamente :)')
}
} 

// Eventos
inputElement.addEventListener('keypress', function (e) {
    if(e.key ==='Enter'){
        guessLetter()
    }
})

submitButton.addEventListener('click', guessLetter)
