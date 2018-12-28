// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var numArray = cardNumber.split("");

  var firstOne = parseInt(numArray[0]);
  var firstTwo = parseInt(numArray[0] + numArray[1]);
  var firstThree = parseInt(numArray[0] + numArray[1] + numArray[2]);
  var firstFour = parseInt(numArray[0] + numArray[1] + numArray[2] + numArray[3]);
  var firstSix = parseInt(numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4] + numArray[5]);

  var numLength = numArray.length;

  //Switch
  if ((numLength === 16 || numLength === 18 || numLength === 19) && ([4903, 4905, 4911, 4936, 6333, 6759].includes(firstFour) || [564182, 633110].includes(firstSix))){
    return "Switch";
  }  

  //China UnionPay
  if ((numLength >= 16 && numLength <= 19) && ((firstThree >= 624 && firstThree <= 626) || (firstFour >= 6282 && firstFour <= 6288) || (firstSix >= 622126 && firstSix <= 622925))){
  	return "China UnionPay";
  }

  //Maestro
  if ((numLength >= 12 && numLength <= 19) && (firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304)){
  	return "Maestro";
  }

  //Discover
  if ((numLength === 16 || numLength === 19) && (firstTwo === 65 || (firstThree >= 644 && firstThree <= 649) || firstFour === 6011)){
  	return "Discover";
  }

  //MasterCard
  if (numLength === 16 && (firstTwo >= 51 && firstTwo <= 55)){
  	return "MasterCard";
  }

  //Diner's Club
  if (numLength === 14 && (firstTwo === 38 || firstTwo === 39)){
  	return "Diner's Club";
  }

  //American Express
  if (numLength === 15 && (firstTwo === 34 || firstTwo === 37)){
  	return "American Express";
  }

  //Visa
  if (([13, 16, 19].includes(numLength)) && firstOne === 4){
  	return "Visa";
  }
};

/*
38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)
*/
