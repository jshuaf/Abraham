module.exports = {
	parserOptions: {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	extends: "airbnb",
	rules: {
		"indent": ["error", "tab"]
	},
	plugins: ["react"]
}