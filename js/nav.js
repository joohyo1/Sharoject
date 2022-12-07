const Nav = class {
  init(el) {
    this.$el = el;

    return this;
  }

  setup(el) {
    this.init(el);

    console.log("nav");
    console.log(this.$el);

    return this;
  }
};

export default Nav;
