const q = console.log;

const aspectRatio =
  document.querySelector("img").getBoundingClientRect().width /
  document.querySelector("img").getBoundingClientRect().height;

q(aspectRatio);

document.querySelector("img").style = "display: none;";

let mediaQueryCondition = window.matchMedia(
  `(min-aspect-ratio: ${aspectRatio})`
);

mediaQueryCondition.addEventListener("change", () => {
  if (mediaQueryCondition.matches) {
    document.getElementById("centerImg").style = "background-size: 200% auto;";
  } else {
    document.getElementById("centerImg").style = "background-size: auto 200%;";
  }
});
