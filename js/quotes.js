const quotes = [
  {
    quotes: "음식에 대한 사랑보다 더 진실된 사랑은 없다.",
    author: "-George Bernard Shaw-",
  },
  {
    quotes:
      "상대에게 국가를 위해서 무엇을 할 수 있는지 묻지 말라. 점심이 무엇인지 물어라.",
    author: "-Orson Welles-",
  },
  {
    quotes: "음식은 우리의 공감대, 세계적인 공감대이다.",
    author: "-James Beard-",
  },
  {
    quotes:
      "새로운 요리의 발견이 새로운 별의 발견보다 인간을 더욱 행복하게 만든다.",
    author: "-Savarin-",
  },
  {
    quotes: "배고픔이 최고의 소스이다.",
    author: "-Miguel de Cervantes Saavedra-",
  },
  {
    quotes: "많이 먹으려면 종목을 바꿔가며 먹어라.",
    author: "-맛있는 녀석들-",
  },
  {
    quotes: "마요네즈는 배신하지 않는다.",
    author: "-맛있는 녀석들-",
  },
  {
    quotes: "빵만 있다면 웬만한 슬픔은 견딜 수 있다.",
    author: "-Miguel de Cervantes Saavedra-",
  },
  {
    quotes: "좋은 음식은 좋은 대화로 끝 난다.",
    author: "-Geoffrey Neighor-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;
quote.id = "quote";
author.id = "quote";
