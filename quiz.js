/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const correct_answer1 = "6";
const correct_answer2 = "Anne Boleyn";
const correct_answer3 = "2";
const correct_answer4 = "2";
const correct_answer5 = "Mary";

// 2. Store the rank of a player


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt("How many wives did Henry VIII have?");

if ( answer1.toUpperCase === correct_answer1 ) {
    total = 1;
} else {
    total = 0;
}
const answer2 = prompt("What was his second wife's name?");

if ( answer2 === correct_answer2 ) {
    total += 1;
} else {
    total;
}
const answer3 = prompt("How many sons did Henry VIII have?");

if ( answer3 === correct_answer3 ) {
    total += 1;
} else {
    total;
}
const answer4 = prompt("How many daughters did Henry VIII have?");

if ( answer4 === correct_answer4 ) {
    total += 1;
} else {
    total;
}
const answer5 = prompt("Which daughter became queen first?");

if ( answer5 === correct_answer5 ) {
    total += 1;
} else {
    total;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (total === 5) {
    result = ("a gold crown");
} else if (total === 3 || total === 4) {
    result = ("a silver crown");
} else if (total === 1 || total === 2) {
    result = ("a bronze crown");
} else {
    result = ("no crown");
}


// 6. Output results to the <main> element

const resultsMessage = `<h2>You earned ${result}. Thanks for playing!</h2>`
const totalMessage = `<p>Your score was ${total} out of 5.</p>`

document.querySelector('main').innerHTML = resultsMessage + totalMessage
