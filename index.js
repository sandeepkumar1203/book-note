const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const ratio = winWidth / 1920;
const fontSize = {
  small: 10,
  medium: 12,
};
const played = [0, 0, 0];
const vara = [];
const bodyFontSize = Math.max(16 * ratio, 10);
const posX = Math.max(10 * ratio, 30);

document.body.style.fontSize = `${bodyFontSize}px`;
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);

function createVaraContainer(id, jsonUrl, texts, options) {
  return new Vara(id, jsonUrl, texts, options);
}

vara[0] = createVaraContainer(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "15 Jan 2019",
      textAlign: "right",
      y: 20,
      x: -100,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "Start the year with something cool.",
      y: 40,
      x: posX,
      color: "rgb(4, 11, 20)",
      duration: 4000,
    },
    {
      text: "Like with a library,",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 4500,
    },
    {
      text: "..... that can animate text writing",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 4500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);

vara[1] = createVaraContainer(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "16 Jan 2019",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: 8,
    },
    {
      text: "Try to create something else.",
      y: 40,
      x: posX,
      duration: 4000,
    },
    {
      text: "Like a diary or a todo list.",
      y: 40,
      x: posX,
      duration: 3500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);

vara[2] = createVaraContainer(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "17 Jan 2019",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "Creating a Diary.",
      y: 40,
      x: posX,
      duration: 4000,
    },
    {
      text: "View the library on,",
      y: 20,
      x: posX,
      duration: 3500,
    },
    {
      text: "Github.",
      y: 10,
      color: "#3f51b5",
      id: "link",
      x: posX,
      duration: 1500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);

function handleFrontClick(index) {
  const paper = document.querySelectorAll(".paper")[index];
  const book = document.querySelector(".book");
  book.classList.add("open");
  paper.classList.add("open");

  if (!played[index]) {
    vara[index].playAll();
    vara[index].animationEnd((i, o) => {
      played[index] = 1;
      if (i === "link") {
        const group = o.container;
        const rect = vara[2].createNode("rect", {
          x: 0,
          y: 0,
          width: o.container.getBoundingClientRect().width,
          height: o.container.getBoundingClientRect().height,
          fill: "transparent",
        });
        group.appendChild(rect);
        rect.style.cursor = "pointer";
        rect.addEventListener("click", () => {
          console.log(true);
          document.querySelector("#link").click();
        });
      }
    });
  }
}

function handleBackClick(index) {
  const paper = document.querySelectorAll(".paper")[index];
  if (index === 0) {
    const book = document.querySelector(".book");
    book.classList.remove("open");
  }
  paper.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".front:not(.last)").forEach((element, index) => {
    element.addEventListener("click", () => handleFrontClick(index));
  });

  document.querySelectorAll(".back").forEach((element, index) => {
    element.addEventListener("click", () => handleBackClick(index));
  });
});
