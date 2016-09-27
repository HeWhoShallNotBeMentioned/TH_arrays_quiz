var questions = [
  ["How many states are in the United States?", 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];


function print(message) {
  document.write(message);
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var z = 0; z < arr.length; z += 1 ) {
      listHTML += '<li>' + arr[z] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var z = 0; z < questions.length; z += 1) {
  question = questions[z][0];
  answer = questions[z][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
