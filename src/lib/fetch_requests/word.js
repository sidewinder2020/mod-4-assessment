const $ = require('jquery')
const url = `https://wordwatch-api.herokuapp.com`

import {handleResponse} from '../response_handlers/basic_response_handler'
import {putTopWordOnPage} from '../response_handlers/word_response_handler'

export function getTopWord() {
  fetch(`${url}/api/v1/top_word`)
    .then(response => handleResponse(response))
    .then(topWord => putTopWordOnPage(topWord))
    .catch(error => console.error({ error }))
}

export function postToApi(wordName) {
  console.log(wordName)
  var postOptions = {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ word : { value: wordName } }),
  }

  fetch(`${url}/api/v1/words`, postOptions)
  .then(response => handleResponse(response))
  .then(message => console.log(message))
  .catch(error => console.error({ error }))
}
