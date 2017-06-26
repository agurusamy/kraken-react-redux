module.exports = function (grunt) {
  grunt.initConfig({
        webpack: {
            bundle: require('./webpack.config.js')
        },
        shell: {
            test: {
                command: 'npm test'
            }
        }
    });

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    grunt.registerTask('build', [ 'jshint', 'webpack' ]);
    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);
};
