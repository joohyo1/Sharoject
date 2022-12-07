import Nav from "./nav.js";

const App = class {
  constructor(root) {
    this.$root = root;

    this.$nav = new Nav().setup(document.querySelector("#buttonContainer"));
  }
};

window.onload = () => {
  new App(document.querySelector(".root"));
};
