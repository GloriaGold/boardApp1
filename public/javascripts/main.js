//import Header from './Header.js'
//const header = new Header('[data-module-header]')

import { $, $$ } from './utils/helpers.js'

const button = $('[data-button]')
const frontpage = $('[data-overview]')
const newBoard = $('#newBoard')

button.addEventListener('click', event => {
  frontpage.classList.toggle('hidden')
  newBoard.classList.toggle('hidden')
  // gezeigt werden soll die seite mit der Id newBoard und der jeweilige inhalt der in der div ist. innerHTML
})

const formEl = document.querySelector('.task-form')
const inputEl = document.querySelector('.task-form__input')
const buttonEl = document.querySelector('.task-form__btn')
const placeholderEl = document.querySelector('.todo__placeholder')
const templateEl = document.querySelector('.template')
const templateString = templateEl.innerHTML
let todos = []

formEl.addEventListener('submit', addTodo)

function addTodo(event) {
  event.preventDefault()
  todos = [...todos, inputEl.value]
  placeholderEl.innerHTLML = ''
  todos.forEach(insertListItem)

  inputEl.value = ''
  inputEl.focus()
}

function insertListItem(todoText) {
  const listItem = templateString.replace('#value#', todoText)
  placeholderEl.insertAdjacentHTML('beforebegin', listItem)
}

function onSubmit(event) {
  event.preventDefault()
  const listItem = templateString.replace('#value#', inputEl.value)
  placeholderEl.insertAdjacentHTML('beforebegin', listItem)
  inputEl.value = ''
  inputEl.focus()
}

/*const button = $('[data-button]')
const frontpage = $('[data-overview]')
const newBoard = $('#newBoard')

button.addEventListener('click', event => {
  frontpage.classList.toggle('hidden')
  newBoard.classList.toggle('hidden') */
