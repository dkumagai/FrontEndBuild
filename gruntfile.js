module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		compass : {
			compile : {
				options : {
					config : "frontend/config.rb",
					basePath : "frontend",
				}
			},
			clean : {
				options : {
					config : "frontend/config.rb",
					basePath : "frontend",
					clean : true
				}
			}
		},
		requirejs : {
			compile : {
				options : {
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
					fileExclusionRegExp: /spec*|sass*|config*|build*/
				}
			}
		},
		clean : {
			compile : ["./frontend-build", "./frontend/css", "./frontend/.sass-cache"]
		},
		mocha : {
			test : {
				src : ["./frontend/spec/*.html"],
				options : {
					run : true
				}
			}
		},
		jshint : {
			test : {
				src : ["./frontend/javascripts/*.js"],
				options : {
					camelcase : true,
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha');
	
	grunt.registerTask("test", ["mocha", "jshint"]);
	grunt.registerTask("default", ["clean", "compass:clean", "compass:compile", "requirejs:compile"]);
}