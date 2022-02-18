function letra(letter, id, textInput) {
  input = document.getElementById(textInput)
  input.value += letter


  boton = document.getElementById(id)
  boton.style.color = 'red'
  boton.style.backgroundColor = 'gray'
}

document.addEventListener("DOMContentLoaded", () => {
  createSquares();
  const keys = document.querySelectorAll(".lineaTeclado button");

  let guessedWords = [[]];
  let availableSpace = 1;

  let word= "listo";
  let guessedWordCount = 0;


  function createSquares() {
  const gameBoard = document.getElementById("tablero");

  for (let index = 0; index < 25; index++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", index + 1);
    gameBoard.appendChild(square);
    }
  }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }
  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));

      availableSpace = availableSpace + 1;
      availableSpaceEl.textContent = letter;
    }
  }
  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(58, 58, 60)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition;

    if (isCorrectPosition) {
      return "rgb(83, 141, 78)";
    }

    return "rgb(181, 159, 59)";
  }

  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("Word must be 5 letters");
    }

    const currentWord = currentWordArr.join("");
    const firstLetterId = guessedWordCount * 5 + 1;
    const interval = 200;

    currentWordArr.forEach((letter, index) => {
      const tileColor = getTileColor(letter, index);
      const firstLetterId = guessedWordCount * 5 + 1;
      const letterId = firstLetterId + index;
      const letterEl = document.getElementById(letterId);
      letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
      interval * index;
      });
    guessedWordCount += 1;

    if (currentWord === word) {
      window.alert("Congratulations!");
    }

    if (guessedWords.length === 6) {
      window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
    }


    guessedWords.push([]);
    return;
  }


  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "revisar") {
        window.alert("revisando");
        handleSubmitWord();
        window.alert("terminado");
        return;
      }

      if (letter === "borrar") {
        window.alert("borrar no esta listo");
        return;
      }
      updateGuessedWords(letter)

    };
  }
});
