const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sandor",
      age: 20,
      showContent: true,
      x: 0,
      y: 0,
      Heors: ["shijil", "divin", "akhile", "Rishi"],
      books: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          img: "https://jamesclear.com/wp-content/uploads/2022/09/9M-atomic-habits-dots.png",
          isfav: true,
        },
        {
          title: "four thousand weeks",
          author: "Oliver Burkeman",
          img: "https://everyday-reading.com/wp-content/uploads/2024/01/Screen-Shot-2023-12-14-at-10.24.06-AM-150x224.png",
          isfav: false,
        },
        {
          title: "Carrie Soto is Back",
          author: "Taylor Jenkins Reid",
          img: "https://everyday-reading.com/wp-content/uploads/2024/01/Screen-Shot-2024-01-24-at-8.30.49-PM-150x221.png",
          isfav: true,
        },
      ],
      url: "http://www.thenetninja.co.uk",
    };
  },
  methods: {
    changeName: function () {
      this.title = "changed";
    },
    toggleshowContent: function () {
      this.showContent = !this.showContent;
    },
    handleEvent: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

app.mount("#app");
