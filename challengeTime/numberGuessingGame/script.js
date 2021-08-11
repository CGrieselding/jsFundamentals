let lowerLimit = 1;
let upperLimit = 10;
let tries = 3;
let answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
let guess = "";
let message = "Please guess a number between " + lowerLimit + " and " + upperLimit + ":";

function guessNumber() {
    while (tries > 0) {
        guess = prompt(message, guess);

        if (guess == null) {
            alert("Quitting game now.");
            break;
        } else if (isFinite(guess) && guess != "") {
            guess = +guess;

            if (guess < lowerLimit) {
                alert("Your guess should be no less than " + lowerLimit + ".");
            } else if (guess > upperLimit) {
                alert("You guess should be no greater than " + upperLimit + ".");
            } else if (guess > answer) {
                alert("Too high!");
            } else if (guess < answer) {
                alert("Too low!");
            } else {
                alert("Great job! You guessed the correct number!");
                break;
            }
        }
        else {
            alert("You must enter a number as a guess.")
        }
        tries = tries - 1;
    }
    if (tries == 0) {
        alert("You ran out of tries. The number was " + answer + ".");
    }

}