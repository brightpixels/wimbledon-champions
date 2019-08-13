import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

module.exports = {
  input: "src/index.js",
  external: Object.keys(pkg.peerDependencies || {}),
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
    babel({
      exclude: "node_modules/**"
    }),
    json({
      exclude: "node_modules/**"
    })
  ]
};
