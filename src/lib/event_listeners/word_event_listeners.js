const $ = require('jquery')
import {postWordsAndCountAsSize} from '../response_handlers/word_response_handler'

export function addEventListeners() {
  $('#break-down-button').on('click', function() {
  event.preventDefault();
  postWordsAndCountAsSize(event);
  })

}
