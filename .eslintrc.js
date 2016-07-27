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
		"react/jsx-indent": ["off"],
		"react/jsx-indent-props": ["off"],
		"react/jsx-closing-bracket-location": ["off"],
		"no-param-reassign": ["off"]
	},
	plugins: ["react"]
}