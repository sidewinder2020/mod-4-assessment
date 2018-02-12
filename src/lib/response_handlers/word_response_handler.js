const $ = require('jquery')
import {postToApi} from '../fetch_requests/word'

export function putTopWordOnPage(topWord) {
  $('#top_word').append(`${Object.keys(topWord.word)[0]} (${topWord.word[Object.keys(topWord.word)[0]]})`)
}

export function postWordsAndCountAsSize(event) {
  var innerTextForSize = event.currentTarget.parentElement.children[1].value.toLowerCase()
  var punctuationless = innerTextForSize.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var finalString = punctuationless.replace(/\s{2,}/g," ");
  var wordArray = finalString.split(" ")
  $('#word-and-word-countSize').empty();

  var frequency = sortByFrequency(wordArray);
  postWordOnHtml(frequency);
  allWordsSendToApi(wordArray);
}

function sortByFrequency(wordArray) {
	var frequency = {};

	wordArray.forEach(
		function(value) {
      frequency[value] = 0;
    }
	);
  for (var i=0; i < wordArray.length; i++) {
    if(frequency[wordArray[i]] != undefined) {
      frequency[wordArray[i]] += 1
    };
  };
  return frequency
};

function postWordOnHtml(frequency) {
  var words = Object.keys(frequency)
  for (var i=0; i < words.length; i++) {
    $('#word-and-word-countSize').append(`<p id="${words[i]}-word">${words[i]}</p></br>`);
    var fontSize = frequency[words[i]]
    $(`#${words[i]}-word`).css("font-size", `${fontSize}em`);
  };
};


function allWordsSendToApi(wordArray) {
  wordArray.forEach(function(word) {
    var wordName = word
    postToApi(wordName);
  });
}
