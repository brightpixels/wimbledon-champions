import json from "rollup-plugin-json";
module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs"
    },
    {
      file: "./dist/bundle.esm.js",
      format: "esm"
    },
    {
      file: "./dist/bundle.umd.js",
      format: "umd",
      name: "wimbledonChampions"
    }
  ],
  plugins: [
    json({
      exclude: "node_modules/**"
    })
  ]
};
