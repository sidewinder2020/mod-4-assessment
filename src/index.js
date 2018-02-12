import $ from 'jquery'
import {getTopWord} from './lib/fetch_requests/word'
import {addEventListeners} from './lib/event_listeners/word_event_listeners'

$(document).ready(() => {
  getTopWord()
  addEventListeners()
})
