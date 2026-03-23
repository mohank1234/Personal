const commitmentText = document.getElementById("commitmentText");
const nextCommitment = document.getElementById("nextCommitment");
const draftOutput = document.getElementById("draftOutput");
const draftButtons = document.querySelectorAll(".draft-btn");

const commitments = [
  "I value Moni and I will show it through consistency and respect.",
  "I will communicate clearly, without forcing quick replies.",
  "I will focus on becoming better in behavior, not just better in words.",
  "I will always respect boundaries and personal comfort.",
];

const drafts = {
  1: "Hi Moni, I wanted to say sorry for my mistake. I respect your space and will not repeat it.",
  2: "Hey Moni, I understand if you need time. I just wanted you to know I meant no discomfort.",
  3: "Hi, no pressure to reply. I respect you and I will keep things respectful from my side.",
};

let commitmentIndex = 0;

nextCommitment.addEventListener("click", () => {
  commitmentIndex = (commitmentIndex + 1) % commitments.length;
  commitmentText.textContent = commitments[commitmentIndex];
});

draftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.draft;
    draftOutput.textContent = drafts[key];
  });
});
