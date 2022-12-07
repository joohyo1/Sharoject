const images = [
  "철판구이 고쿠.png",
  "키요이스키야키.png",
  "딸랏롯빠이.png",
  "더멜팅팟.png",
  "미분당.png",
  "카이센동136.png",
  "텐동요츠야.png",
  "하우츠 마라탕.png",
  "시골집.png",
  "기절초풍왕순대.png",
  "어부사시가.png",
  "제주상회.png",
  "아로이 팟타이.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const main = document.querySelector("main");

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;

main.appendChild(bgImg);
bgImg.width = 600;
bgImg.height = 600;
bgImg.id = "restrantImg";
