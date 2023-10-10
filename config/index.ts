import gallery from "./gallery";
import skillGraph from "./skill-graph";
import travelMap from "./travel-map";

const config = {
  nav: [
    { text: 'Home', link: '/' },
    {
      text: 'Blog',
      link: '/blog/',
    },
    {
      text: 'Works',
      link: '/works/',
    },
    {
      text: 'Books',
      items: [
        { text: 'JavaScript 的世界', link: '/books/javascript-in-the-world/introduction/what-is-javascript' },
        { text: '前端面试', link: '/books/front-end-interview/' },
        { text: '算法指南', link: '/books/algorithm/' },
      ],
    },
    {
      text: 'Gallery',
      link: '/gallery/',
    },
    {
      text: 'About',
      link: '/about/',
    },
  ],
  resolve: {
    blog: ["posts/blog"],
    books: ["posts/books"],
    gallery: ["posts/gallery"],
  },
  data: {
    gallery,
    skillGraph,
    travelMap,
  },
};

export default config;
