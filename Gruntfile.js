module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'public/js/prod.js': [
						'src/js/vendors/q.js',
						'src/js/vendors/progress.min.js',
						'src/js/progressBar.js',
						'src/js/specLoader.js',
						'src/js/notify.js',
						'src/js/specForm.js',
						'src/js/app.js'
					]
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'public/css/style.css': [
						'src/css/style.css',
						'src/css/vendors/progressjs.min.css'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['uglify', 'cssmin']);
};