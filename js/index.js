const modal = [document.querySelector(".modal"), document.querySelector(".modal-background")];
const modalRestartButton = document.querySelector(".modal-content button");
const modalContentResult = document.querySelector(".result");
const emojiChoices = document.querySelectorAll(".choices p");
const playerEmoji = document.querySelector(".player-emoji");
const botEmoji = document.querySelector(".bot-emoji");
const copyrightYear = document.querySelector(".copyright-year");

const year = new Date().getFullYear();
const choices = ["✊", "✋", "✌"];

copyrightYear.innerText = year;

modalRestartButton.addEventListener("click", () => {
    modal.forEach((component) => {
        component.classList.toggle("show");
    });

    [playerEmoji, botEmoji].forEach((emoji) => {
        emoji.innerText = "";
    });
});

emojiChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.innerText;
        const botChoice = choices[Math.floor(Math.random() * 3)];

        let result;

        if (playerChoice === botChoice) {
            result = "Draw";
        } else if (playerChoice === "✊" && botChoice === "✌" || playerChoice === "✋" && botChoice === "✊" || playerChoice === "✌" && botChoice === "✋") {
            result = "You Won";
        } else {
            result = "You Lost";
        }

        playerEmoji.innerText = playerChoice;
        botEmoji.innerText = botChoice;

        modal.forEach((component) => {
            modalContentResult.innerText = result;

            component.classList.toggle("show");
        });

    });
});