import Header from './Header.js'
const header = new Header('[data-module-header]')

import { $, $$ } from './utils/helpers.js'

const button = $('.js-button')
const frontpage = $('#frontpage')
const newBoard = $('#newBoard')

button.addEventListener('click', event => {
  frontpage.classList.toggle('hidden')
  newBoard.classList.toggle('hidden')
  // gezeigt werden soll die seite mit der Id newBoard und der jeweilige inhalt der in der div ist. innerHTML
})
