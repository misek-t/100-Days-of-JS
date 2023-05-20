let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin"); //select the coin (class) element from HTML
let flipBtn = document.querySelector("#flip-button"); //select the flip-button (id) from HTML
let resetBtn = document.querySelector("#reset-button"); //select the reset-button (id) from HTML

//the event occurs when the button is clicked using a mouse
flipBtn.addEventListener("click", () => {
    // Math.floor(number) rounds down and returns the largest integer of the given number less than or equal to the given number
    // Math.random() gives a random number equals or more than 0 and less than 1
    // the line below generates a random number and multiply it by 2. then it will be rounded down to its nearest integer which will give either 0 or 1 as the output
    let i = Math.floor(Math.random() * 2);
    // this line stops any animation on the coin image
    coin.style.animation = "none";

    // the if statement belows will execute if the i returns as 1 (true condition) 
    if (i) {
        // setTimeout function will delay the execution of the code after 100ms
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    // `` converts the heads into a string
    // textContent sets the selected element to a string
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function() {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
})