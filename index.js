var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// var firstPresident = BasicCard(
//   "Who was the first president of the United States?", "George Washington");

// console.log(firstPresident.front);
// console.log(firstPresident.back);

// var firstPresidentClozeError = ClozeCard(
//   "George Washington was the first president of the United States.", "Beth Washington");

// console.log(firstPresidentClozeError.cloze);
// console.log(firstPresidentClozeError.fullText);
// console.log(firstPresidentClozeError.partial);

// var firstPresidentCloze = ClozeCard(
//   "George Washington was the first president of the United States.", "George Washington");

// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.fullText);
// console.log(firstPresidentCloze.partial);

var inquirer = require("inquirer");

inquirer
  .prompt([ 
    {
      type: "list",
      message: "What type of flashcard do you wish to create?",
      choices: ["Basic", "Cloze"],
      name: "type"
    }
  ]).then(function(response) {
  	if (response.type === "Basic"){
  	  inquirer.prompt([
  	    {
  	      type: "input",
  	      message: "What is the question?",
  	      name: "question"
  	    },

  	    {
  	      type: "input",
  	      message: "What is the answer?",
  	      name: "answer"
  	    }
  	  ]).then(function(response){
  	  	var Basic = BasicCard(response.question, response.answer);
  	  	console.log(Basic);
  	  });
  	}
  	else if (response.type === "Cloze"){
  	  	inquirer.prompt([
  	    {
  	      type: "input",
  	      message: "What is the question?",
  	      name: "question"
  	    },
  	    {
  	      type: "input",
  	      message: "What is the cloze?",
  	      name: "cloze"
  	    }
  	  ]).then(function(response){
  	  	var Cloze = ClozeCard(response.question, response.cloze);
  	  	console.log(Cloze);
  	  });
  	}
  	else{
  	  console.log("Sorry, there was an error. Please try again.");
  	}
  });



