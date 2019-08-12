import json from "rollup-plugin-json";
import pkg from "./package.json";

module.exports = {
  input: "src/index.js",
  extetrnals: Object.keys(pkg.peerDependencies || {}),
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
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
