import skillGraph from './skill-graph'
import travelMap from './travel-map'


const config = {
  resolve: {
    posts: ['assets/posts'],
    books: ['assets/books'],
    gallery: ['assets/gallery'],
  },
  data: {
    skillGraph,
    travelMap,
  },
}

export default config;
