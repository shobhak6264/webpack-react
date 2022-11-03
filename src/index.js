// DEMO JOKE APP
import generateRandomBank from './generateRandomBank'
import './styles/main.scss'
import bank from './assets/bank.jpeg'

const bankImg = document.getElementById('bankImg')
bankImg.src = bank

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateRandomBank)

generateRandomBank()
