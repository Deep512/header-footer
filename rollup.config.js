// import sass from "rollup-plugin-sass";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

export default {
	input: "src/App.js",
	output: {
		file: pkg.main,
		format: "cjs",
	},
	plugins: [
		postcss({
			extensions: [".css"],
		}),
		babel({
			exclude: "node_modules/**",
		}),
		resolve(),
		commonjs(),
	],
	external: ["react", "react-dom", "react-router-dom"],
};
