const koreanFood = document.querySelector("#koreanFood");
const westernFood = document.querySelector("#westernFood");
const japaneseFood = document.querySelector("#japaneseFood");
const chineseFood = document.querySelector("#chineseFood");

const koreanFoodImages = [
  "시골집.png",
  "어부사시가.png",
  "제주상회.png",
  "기절초풍왕순대.png",
];

const SoutheastAsianFoodImages = [
  "딸랏롯빠이.png",
  "미분당.png",
  "아로이 팟타이.png",
];

const japaneseFoodImages = [
  "철판구이 고쿠.png",
  "키요이스키야키.png",
  "카이센동136.png",
  "텐동요츠야.png",
];

const chineseFoodImages = ["하우츠 마라탕.png"];

function drawkoreanFoodImg(event) {
  const $main = document.querySelector("main");
  $main.innerHTML = "";

  const chosenImage =
    koreanFoodImages[Math.floor(Math.random() * koreanFoodImages.length)];

  const main = document.querySelector("main");
  const bgImg = document.createElement("img");

  bgImg.src = `../img/${chosenImage}`;
  bgImg.style.position = "relative";

  main.appendChild(bgImg);
  bgImg.width = 600;
  bgImg.height = 600;
}

function drawSoutheastAsianFoodImg(event) {
  const $main = document.querySelector("main");
  $main.innerHTML = "";

  const chosenImage =
    SoutheastAsianFoodImages[
      Math.floor(Math.random() * SoutheastAsianFoodImages.length)
    ];

  const main = document.querySelector("main");
  const bgImg = document.createElement("img");

  bgImg.src = `../img/${chosenImage}`;

  main.appendChild(bgImg);
  bgImg.width = 600;
  bgImg.height = 600;
}

function drawChineseFoodImg(event) {
  const $main = document.querySelector("main");
  $main.innerHTML = "";

  const chosenImage =
    chineseFoodImages[Math.floor(Math.random() * chineseFoodImages.length)];

  const main = document.querySelector("main");
  const bgImg = document.createElement("img");

  bgImg.src = `../img/${chosenImage}`;

  main.appendChild(bgImg);
  bgImg.width = 600;
  bgImg.height = 600;
}

function drawJapaneseFoodImg(event) {
  const $main = document.querySelector("main");
  $main.innerHTML = "";

  const chosenImage =
    japaneseFoodImages[Math.floor(Math.random() * japaneseFoodImages.length)];

  const main = document.querySelector("main");
  const bgImg = document.createElement("img");

  bgImg.src = `../img/${chosenImage}`;

  main.appendChild(bgImg);
  bgImg.width = 600;
  bgImg.height = 600;
}

koreanFood.addEventListener("click", drawkoreanFoodImg);

westernFood.addEventListener("click", drawSoutheastAsianFoodImg);

chineseFood.addEventListener("click", drawChineseFoodImg);

japaneseFood.addEventListener("click", drawJapaneseFoodImg);

function removeFoodImg() {
  const $main = document.querySelector("main");
  $main.innerHTML = "";
}
