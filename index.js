var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = BasicCard(
  "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);

var firstPresidentClozeError = ClozeCard(
  "George Washington was the first president of the United States.", "Beth Washington");

console.log(firstPresidentClozeError.cloze);
console.log(firstPresidentClozeError.fullText);
console.log(firstPresidentClozeError.partial);

var firstPresidentCloze = ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.partial);