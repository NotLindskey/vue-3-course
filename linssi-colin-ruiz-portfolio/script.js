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

const appHeader = {
  data() {
    return {
      name: "Linssi Colin Ruiz",
      links,
    };
  },
  template: `<header>
        <h1>{{name}}'s Portfolio</h1>
        <nav>
          <ul>
            <li v-for="link in links" :key="link.id">
              <a :href="link.url">{{link.name}}</a>
            </li>
          </ul>
        </nav>
      </header>
      `,
};

const blogPost = {
  props: ["post"],
  template: `
            <article>
              <h3>{{post.title}}</h3>
              <p v-html="post.body"></p>
              <p class="read_more">Read More</p>
            </article>`,
};

const app = Vue.createApp({
  components: {
    "blog-post": blogPost,
    "app-header": appHeader,
  },
  created() {
    // this.getPosts();
  },
  data() {
    return {
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
    // async getPosts() {
    //   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   let data = await response.json();
    //   console.log(data);
    // },
  },
});

app.mount("body");
