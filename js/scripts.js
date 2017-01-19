//Back-end
var numerals = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
}

var denominators = [1000, 500, 100, 50, 10, 5, 1]

function buildNumeralsArray(num) {
  var numOfEach = [];
  denominators.forEach(function(denominator) {
    var numOfDenom = Math.floor(num/denominator);
    console.log("numofnum is: " + numOfDenom);
    if (numOfDenom) {
      num = num % (denominator * numOfDenom);
      numOfEach.push(numOfDenom);
    } else {
      numOfEach.push(0);
    }
  });
  console.log(numOfEach);
  return numOfEach;
}

function addNumerals(num) {
  var array = buildNumeralsArray(num);
  var resultString = "";
  for (var i = 0; i < array.length; i++) {
    var matchingLetter = numerals[denominators[i].toString()];
    for (var j = 0; j < array[i]; j++) {
      resultString += matchingLetter;
    }
  }
  return resultString;
}

function translate(num) {
  if (!parseInt(num)) {
    return "Please enter a number."
  } else if (parseInt(num) < 1 || parseInt(num) > 3999) {
    return "Please enter a number from 1 to 3,999."
  } else {
    var finalString = addNumerals(num);


    return finalString;
  }
}

//Front-end
$(function() {
  function displayAnswer(answer) {
    $("#answer").text(answer);
  }

  $("#translator").submit(function(event) {
    event.preventDefault();

    var input = $("#translator input").val();
    var answer = translate(input);

    displayAnswer(answer);
  });
});
