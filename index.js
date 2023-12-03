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
  sendEmail();
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

function sendEmail() {
  const obj = {
    subject: 'Remainder',
    access_key: "1c792d4a-f37c-45f7-9b45-8500b90bc14a",
    botcheck: false,
    email: "jsandysai@gmail.com",
    name: "Sandeep",
    phone: 9999,
    message: "  "
  }
  const json = JSON.stringify(obj);
  axios.post('https://api.web3forms.com/submit', json, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        console.log('done');
      });
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
  "Hey hiiii.....If you are reading this, that means I finally gathered the courage and gave you this website link.I guess you might be confused or even surprised now😂.",
  "Indulo cheppedi antha direct ga cheppochu, but to be honest I thought that would be disastrous. My first thought was 'pattukoni kottesthe, leda class pikesthe mana paristhithi enti ani😂'. So aah bhayam tho, ila cheptunna.",
];
const textArray2 = [
  "So basically, last saturday when I saw you in the store, I was like 'she is so beautiful, so elegant, just looking like a wow😂😂😂' and you seemed so calm and peaceful eventhough a customer(some uncle) was literally shouting and making everyone go irritated.",
  "So I basically made excuses myself to visit the store a couple more times (I am not a stalker though, I promise😅)."
];
const textArray3 = [
  "So in short em cheppdham ankutunna ante,I would love to get to know you. I don't know how this turns out, but I wanna atleast try without regrets.",
  "And I am really hoping that you don't have a boyfriend (fingers crossed🤞). You know the saying, 'Edaina kavalante gattiga anuko, aipothadi ani', so gattiga ankuntunna. I am dropping my instagram ID here. Hoping and waiting for a response.",
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
