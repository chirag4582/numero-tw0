// Iteration 1: Making the play button in the index.html functional.
const play = document.getElementById("play-button");

play.onclick = () => {
  window.location.href = "./game.html";
};
