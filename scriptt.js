document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
});

const blank = document.getElementById("blank");
const result = document.getElementById("result");
const nextWordButton = document.getElementById("next-word");
const letters = document.querySelectorAll(".draggable-letter");
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

letters.forEach(letter => {
    letter.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.dataset.letter);
    });
});

blank.addEventListener("dragover", event => {
    event.preventDefault();
});

blank.addEventListener("drop", event => {
    const droppedLetter = event.dataTransfer.getData("text");
    if (droppedLetter === "o") { // Letra correcta
        blank.textContent = droppedLetter;
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        correctSound.play();
        nextWordButton.style.display = "block";
    } else {
        result.textContent = "¡Inténtalo de nuevo!";
        result.style.color = "red";
        incorrectSound.play();
    }
});

nextWordButton.addEventListener("click", () => {
    // Aquí puedes cargar otra palabra para continuar el juego.
    result.textContent = "";
    blank.textContent = "_";
    nextWordButton.style.display = "none";
});
