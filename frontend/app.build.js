({
	appDir : "./frontend",
	baseUrl : "./frontend",
	dir: "./frontend-build",
	module: [
		{
			name : "main"
		}
	],
	optimize : "uglify2",
	optimizeCss : "none",
	generateSourceMaps: true,
	preserveLicenseComments: false,
	fileExclusionRegExp: /test*|sass*|config*/
})