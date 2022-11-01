const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const pluginMetagen = require("eleventy-plugin-metagen");
const _ = require("lodash");
const moment = require("moment");

module.exports = function (eleventyConfig) {
  // passthrough copy
  eleventyConfig.addPassthroughCopy({ "./src/assets": "assets" });

  // plugins
  eleventyConfig.addPlugin(pluginMetagen);
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/assets/css/*.css",
    dest: "assets",
    keepFolderStructure: false,
    minify: false,
  });

  // filters
  eleventyConfig.addFilter("prettyDate", (date) => {
    return moment(date).format("Do MMM, YYYY");
  });

  return {
    dir: {
      input: "src",
      output: "public",
      pathPrefix: /website/
    },
  };
};
