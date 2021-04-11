// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".tsx", ".ts", ".json"],
    },
  });
};
