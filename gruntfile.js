module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		compass : {
			compile : {
				options : {
					config : "frontend/config.rb",
					basePath : "frontend",
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
			compile : [
				"./frontend-build", 
				"./frontend/css", 
				"./frontend/.sass-cache"
			]
		},
		karma : {
			test : {
				configFile : "karma.conf.js",
				singleRun : true,
				options : {
					files : [
						"./frontend/spec/javascripts/lib/chai.js",
        				"./frontend/spec/javascripts/mocha-setup.js",
        				{
        					pattern: './frontend/spec/tests/*.js', included: true
        				}
        			]
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
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.registerTask("test", ["karma", "jshint"]);
	grunt.registerTask("default", ["clean", "compass:clean", "compass:compile", "requirejs:compile"]);
}