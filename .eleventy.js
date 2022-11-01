const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const pluginMetagen = require("eleventy-plugin-metagen");

module.exports = function (eleventyConfig) {
  // passthrough copy
  eleventyConfig.addPassthroughCopy({ 
    "./src/assets/js": "assets/js",
    "./src/assets/data": "assets/data",
    "./src/assets/image": "assets/image",
  });

  // plugins
  eleventyConfig.addPlugin(pluginMetagen);
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/assets/css/*.css",
    dest: "",
    keepFolderStructure: true,
    minify: true,
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
