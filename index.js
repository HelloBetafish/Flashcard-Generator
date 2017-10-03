var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");

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
        fs.appendFile("log.txt", "---------------------------\r\nBasic Flaschcard:\r\nFront: " +
  	  	  Basic.front + "\r\nBack: " + Basic.back + "\r\n", function(err) {
  	  	  if(err){
            return console.log(err);
  	  	  }
        });
      });
  	}
  	else if (response.type === "Cloze"){
      inquirer.prompt(
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
  	  	fs.appendFile("log.txt", "---------------------------\r\nCloze Flashcard:\r\nFull text: " +
  	  	  Cloze.fullText + "\r\nCloze: " + Cloze.cloze + "\r\nPartial Text: " + Cloze.partial +
  	  	  "\r\n", function(err) {
  	  	  if(err){
            return console.log(err);
  	  	  }
  	  	});
  	  });
  	}
  	else{
  	  console.log("Sorry, there was an error. Please try again.");
  	}
  });



