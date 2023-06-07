const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `"It's been interesting and enjoyable to learn a new language. I learned about vue 
    while watching a fireship video and decided to try out vue. "What is so
    different from React?" 
    <br />
    - is what I asked myself.
    <br />
    <br />
    So here I am.
    <br />
    <br />
    020623`,
  },
  {
    id: 2,
    title: "Using the Vue CDN",
    body: `it is very interesting and pretty straight forward to use. very quick and responsive that it is extremely enjoyable to see the action.`,
  },
  {
    id: 3,
    title: "I am here",
    body: `I am always trying to learn something new."`,
  },
];

const links = [
  { id: 1, name: "home", url: "index.html" },
  { id: 2, name: "portfolio", url: "portfolio.html" },
  { id: 3, name: "contact me", url: "contact.html" },
];

Vue.createApp({
  created() {
    // this.getPosts();
  },
  data() {
    return {
      name: "Linssi Colin Ruiz",
      links,
      posts,
      darkModeSet: false,
      darkMode: {
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
    async getPosts() {
      // let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      console.log(data);
    },
  },
}).mount("body");
