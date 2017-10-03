// console.log("ClozeCard.js has been loaded.");

var ClozeCard = function (text, cloze){
  if (this instanceof ClozeCard) {
  	this.cloze = cloze;
    this.fullText = text;
    this.clozeExists = text.search(cloze);
    if (this.clozeExists === -1){
  	  this.partial = "Oops! The cloze does not exist in the question. Please review and try again.";
    } else {
  	  this.partial = text.replace(cloze, "...");
    }
  } else {
  	return new ClozeCard(text, cloze);
  } 
};

module.exports = ClozeCard;