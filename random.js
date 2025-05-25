// console.log(Math.round(Math.random() * 11));

// const randomNumber = Math.floor(Math.random() * 11);

const randomNumber = Math.floor(Math.random() * 10)+1;


function numberInput() {
    const input = document.getElementById("guessInput").value;
    const guess = parseInt(input);

// if (isNaN(guess >= 1 && guess <= 10)) 
    
    if (!(guess >= 1 && guess <= 10)) {
        result.textContent = "Enter a valid number between 1 and 10";
        return;
    }
    if (guess === randomNumber) {
        result.textContent = "Congratulations! You guessed it right!";
    } 
    else if (guess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } 
    else if (guess > randomNumber) {
        result.textContent = "Too high! Try again.";
    }
}
