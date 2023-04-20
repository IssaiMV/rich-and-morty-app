const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForJavascript = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	options: {
		presets: [
			[
				'@babel/preset-react', { runtime: 'automatic' }
			]
		]
	}
}

const ruleForStyles = {
	test: /\.css$/,
	use: ["style-loader", "css-loader"]
}

const rules = [ruleForJavascript, ruleForStyles]

module.exports = (env, argv) => {
	const { mode } = argv
	const isProduction = mode === 'production'
	return {
		output: {
			filename: isProduction ? '[name].[contenthash].js' : 'main.js',
			path: path.resolve(__dirname, 'public')
		},
		plugins: [
			new HtmlWebpackPlugin({ template: 'src/index.html' })
		],
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: { rules },
		devServer: {
			open: true,
			port: 3000,
			compress: true,
			client: {
				overlay: true,
			}
		},
		devtool: 'source-map'
	}
}