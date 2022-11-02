import skillGraph from "./skill-graph";
import travelMap from "./travel-map";

const config = {
  resolve: {
    blog: ["posts/blog"],
    books: ["posts/books"],
    gallery: ["posts/gallery"],
  },
  data: {
    skillGraph,
    travelMap,
  },
};

export default config;
