const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const ratio = winWidth / 1920;
const fontSize = {
  small: 12,
  medium: 14,
};
const played = [0, 0, 0,0];
const vara = [];
const bodyFontSize = Math.max(10 * ratio, 10);
const posX = Math.max(80 * ratio, 30);
let currentPage = 1;

document.body.style.fontSize = `${bodyFontSize}px`;
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);

// function createVaraContainer(id, jsonUrl, texts, options) {
//   return new Vara(id, jsonUrl, texts, options);
// }

// vara[0] = createVaraContainer(
//   "#vara-container",
//   "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
//   [
//     {
//       text: "15 Jan 2019",
//       textAlign: "right",
//       y: 20,
//       x: -30,
//       delay: 500,
//       duration: 1500,
//       fontSize: fontSize.small,
//     },
//     {
//       text: "Start the year with something cool.",
//       y: 40,
//       x: posX,
//       duration: 4000,
//     },
//     {
//       text: "Like with a library,",
//       id: "sphinx",
//       x: posX,
//       delay: 1000,
//       duration: 4500,
//     },
//     {
//       text: "..... that can animate text writing",
//       id: "end",
//       color: "#3f51b5",
//       delay: 1000,
//       x: posX,
//       duration: 4500,
//     },
//   ],
//   {
//     strokeWidth: 2,
//     fontSize: fontSize.medium,
//     autoAnimation: false,
//   }
// );

// vara[1] = createVaraContainer(
//   "#vara-container2",
//   "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
//   [
//     {
//       text: "16 Jan 2019",
//       textAlign: "right",
//       delay: 500,
//       y: 20,
//       x: -30,
//       duration: 1500,
//       fontSize: 8,
//     },
//     {
//       text: "Try to create something else.",
//       y: 40,
//       x: posX,
//       duration: 4000,
//     },
//     {
//       text: "Like a diary or a todo list.",
//       y: 40,
//       x: posX,
//       duration: 3500,
//     },
//   ],
//   {
//     strokeWidth: 2,
//     fontSize: fontSize.medium,
//     autoAnimation: false,
//   }
// );

// vara[2] = createVaraContainer(
//   "#vara-container3",
//   "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
//   [
//     {
//       text: "17 Jan 2019",
//       textAlign: "right",
//       delay: 500,
//       y: 20,
//       x: -30,
//       duration: 1500,
//       fontSize: fontSize.small,
//     },
//     {
//       text: "Creating a Diary.",
//       y: 40,
//       x: posX,
//       duration: 4000,
//     },
//     {
//       text: "View the library on,",
//       y: 20,
//       x: posX,
//       duration: 3500,
//     },
//     {
//       text: "Github.",
//       y: 10,
//       color: "#3f51b5",
//       id: "link",
//       x: posX,
//       duration: 1500,
//     },
//   ],
//   {
//     strokeWidth: 2,
//     fontSize: fontSize.medium,
//     autoAnimation: false,
//   }
// );

function handleFrontClick(index) {
  const paper = document.querySelectorAll(".paper")[index];
  const book = document.querySelector(".book");
  book.classList.add("open");
  paper.classList.add("open");
  currentPage++;

  if (!played[index]) {
    //vara[index].playAll();
    // vara[index].animationEnd((i, o) => {
    //   played[index] = 1;
    //   if (i === "link") {
    //     const group = o.container;
    //     const rect = vara[2].createNode("rect", {
    //       x: 0,
    //       y: 0,
    //       width: o.container.getBoundingClientRect().width,
    //       height: o.container.getBoundingClientRect().height,
    //       fill: "transparent",
    //     });
    //     group.appendChild(rect);
    //     rect.style.cursor = "pointer";
    //     rect.addEventListener("click", () => {
    //       console.log(true);
    //       document.querySelector("#link").click();
    //     });
    //   }
    // });
  }
}

function handleBackClick(index) {
  const paper = document.querySelectorAll(".paper")[index];
  if (index === 0) {
    const book = document.querySelector(".book");
    book.classList.remove("open");
  }
  paper.classList.remove("open");
  currentPage--;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".front:not(.last)").forEach((element, index) => {
    element.addEventListener("click", () => handleFrontClick(index));
  });

  document.querySelectorAll(".back").forEach((element, index) => {
    element.addEventListener("click", () => handleBackClick(index));
  });
});

// Define an array of strings to be displayed and erased
const textArray1 = [
  "Hey hiiii.....I guess you might be confused or even irritated (hopefully not😅) after I gave you this website, please don't hate me😅.",
  "Indulo cheppedi antha nenu store lone cheppochu, but to be honest I thought that would be disastrous. My first thought was 'pattukoni kottesthe, leda class pikesthe mana paristhithi enti😂'. So aah bhayam tho, ila chepthe aipoddi kadha ani e prayatnam.",
];
const textArray2 = [
  "So basically, last saturday when I saw you in the store, I was like 'so beautiful, so elegant, just looking like a wow😂😂😂' and you seemed so calm and peaceful eventhough a customer(some uncle) was literally shouting and making everyone go irritated.",
  "So I basically made excuses myself to visit the store a couple more times (I am not a stalker though, I promise😅)."
];
const textArray3 = [
  "So in short em cheppdham ankutunna ante,I would love to get to know you, or maybe get an ice-cream together.",
  "And I am really hoping that you don't have a boyfriend (fingers crossed🤞), okavela unte I'll just be another jealous guy😅. Anyhow if by any chance if you like to connect with me, I am dropping my instagram ID here. Hoping to get a reply.",
];
document.querySelector(".animatedText3").innerHTML = textArray2[0];
document.querySelector(".animatedText4").innerHTML = textArray2[1];
document.querySelector(".animatedText5").innerHTML = textArray3[0];
document.querySelector(".animatedText6").innerHTML = textArray3[1];

// Initialize variables
let typeJsText = document.querySelector(".animatedText");
let stringIndex = 0; // Index of the current string in the array
let charIndex = 0; // Index of the current character in the current string
let isTyping = true; // Whether we are currently typing or erasing

function typeJs() {
  if (stringIndex < textArray1.length) {
    // Check if there are more strings to display or erase
    const currentString = textArray1[stringIndex];

    if (isTyping) {
      // Typing animation
      if (charIndex < currentString.length) {
        typeJsText.innerHTML += currentString.charAt(charIndex);
        charIndex++;
      } else {
        isTyping = false;
      }
    } else {
        isTyping = true; // Switch back to typing mode
        stringIndex++; // Move to the next string
        charIndex = 0; // Reset character index
        typeJsText = document.querySelector(".animatedText1");
      }
    }
  }

// Set an interval to call the typeJs function
setInterval(typeJs, 15); // You can adjust the animation speed as needed
