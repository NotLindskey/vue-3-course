const posts = [
  {
    id: 1,
    title: "Why I learned Vue",
    body: `I'm baby chambray street art thundercats occupy four loko
                church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                air plant lomo williamsburg. Listicle aesthetic whatever prism,
                ennui glossier asymmetrical scenester austin intelligentsia
                cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                tumeric."`,
  },
  {
    id: 2,
    title: "Using the Vue CDN",
    body: `I'm baby chambray street art thundercats occupy four loko
                church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                air plant lomo williamsburg. Listicle aesthetic whatever prism,
                ennui glossier asymmetrical scenester austin intelligentsia
                cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                tumeric."`,
  },
  {
    id: 3,
    title: "I am using the vue CDN vue",
    body: `I'm baby chambray street art thundercats occupy four loko
                church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                air plant lomo williamsburg. Listicle aesthetic whatever prism,
                ennui glossier asymmetrical scenester austin intelligentsia
                cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                tumeric. tacos are great!"`,
  },
];

const links = [
  { id: 1, name: "home", url: "index.html" },
  { id: 2, name: "portfolio", url: "portfolio.html" },
  { id: 3, name: "contact me", url: "contact.html" },
];

Vue.createApp({
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
}).mount("body");
