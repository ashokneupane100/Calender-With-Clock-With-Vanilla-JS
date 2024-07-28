const containerEl = document.querySelector(".container");

const careers = [
  "Programmer",
  "Full Stack Developer",
  "JAVASCRIPT LOVER",
  "JAVASCRIPT ENTHUSIAST",
  "TECH ENTREPRENEUR",
  "INSTRUCTOR",
  "SOFTWARE ENGINEER",
  "Academian",
];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  const currentCareer = careers[careerIndex];
  const article = "AEIOU".includes(currentCareer[0]) ? "an" : "a";

  containerEl.innerHTML = `
    <h1>I am ${article} ${currentCareer.slice(0, characterIndex)}.</h1>
  `;

  if (characterIndex === currentCareer.length) {
    careerIndex++;
    characterIndex = 0;

    if (careerIndex === careers.length) {
      careerIndex = 0; // Reset to the beginning
    }
  }

  setTimeout(updateText, 300);
}

updateText();
