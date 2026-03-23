const forgiveBtn = document.getElementById("forgiveBtn");
const dateBtn = document.getElementById("dateBtn");
const message = document.getElementById("message");

const apologyLevels = [
  "Apology level: puppy-eyes + chocolates + full accountability 🐶🍫",
  "Apology level: 999/10. I was wrong. You're gorgeous. Both facts are true.",
  "Apology level: I will listen, learn, and never repeat that mistake. Pinky promise 🤝",
];

let count = 0;

forgiveBtn.addEventListener("click", () => {
  message.textContent = apologyLevels[count % apologyLevels.length];
  count += 1;
});

dateBtn.addEventListener("click", () => {
  message.textContent =
    "YAY 💕 Date idea: food + walk + me being extra nice + zero nonsense.";
});
