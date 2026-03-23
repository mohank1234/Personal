const forgiveBtn = document.getElementById("forgiveBtn");
const dateBtn = document.getElementById("dateBtn");

const message = document.getElementById("message");
const dateMessage = document.getElementById("dateMessage");

const apologyCount = document.getElementById("apologyCount");
const dateCount = document.getElementById("dateCount");
const progressText = document.getElementById("progressText");

const apologyLevels = [
  "I am truly sorry. I understand your feelings and I am learning.",
  "Sorry level 9000: accountability + consistency + forehead kisses.",
  "I choose you, and I will prove it with better actions every day.",
];

const datePlans = [
  "Plan A: your favorite food + sunset walk + no phone distractions.",
  "Plan B: coffee date + bookstore + me carrying your shopping bags.",
  "Plan C: movie night + dessert + me listening to everything.",
];

let apologyClicks = 0;
let dateClicks = 0;

function updateProgress() {
  if (apologyClicks + dateClicks === 0) {
    progressText.textContent = "Just started 🥹";
  } else if (apologyClicks + dateClicks < 4) {
    progressText.textContent = "Getting better ✨";
  } else {
    progressText.textContent = "Maximum effort mode 💖";
  }
}

forgiveBtn.addEventListener("click", () => {
  const nextMessage = apologyLevels[apologyClicks % apologyLevels.length];
  message.textContent = nextMessage;
  apologyClicks += 1;
  apologyCount.textContent = String(apologyClicks);
  updateProgress();
});

dateBtn.addEventListener("click", () => {
  const nextPlan = datePlans[dateClicks % datePlans.length];
  dateMessage.textContent = nextPlan;
  message.textContent = "I am interested in you and us. Please be with me 💕";
  dateClicks += 1;
  dateCount.textContent = String(dateClicks);
  updateProgress();
});
