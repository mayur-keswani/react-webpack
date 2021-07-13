
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports ={
	entry:"./src/index.js",
	module:{
		rules:[
		 {
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
		  	}
	     },

		 {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
		  {
			test: /\.(png|jpe?g|gif)$/i,
			use: [
			  {
				loader: 'file-loader',
			  },
			],
		  },
	  ],
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	plugins:[new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	  })]
}