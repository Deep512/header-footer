const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	target: "node",
	entry: "./src/lib/index.js",
	output: {
		path: path.resolve("dist"),
		filename: "index.js",
		libraryTarget: "commonjs2",
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
		],
	},
	// plugins: [new MiniCssExtractPlugin()],
	// resolve: {
	// 	alias: {
	// 		react: path.resolve(__dirname, "./node_modules/react"),
	// 		"react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
	// 	},
	// },
	// externals: {
	// 	// Don't bundle react or react-dom
	// 	react: {
	// 		commonjs: "react",
	// 		commonjs2: "react",
	// 		amd: "React",
	// 		root: "React",
	// 	},
	// 	"react-dom": {
	// 		commonjs: "react-dom",
	// 		commonjs2: "react-dom",
	// 		amd: "ReactDOM",
	// 		root: "ReactDOM",
	// 	},
	// },
};
