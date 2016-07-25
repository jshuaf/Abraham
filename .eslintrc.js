module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	extends: "airbnb",
	rules: {
		"indent": ["error", "tab"],
		"react/jsx-indent": ["off"]
	},
	plugins: ["react"]
}