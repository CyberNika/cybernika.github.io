import gallery from "./gallery";
import skillGraph from "./skill-graph";
import travelMap from "./travel-map";

const config = {
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
