module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: ['**/*.js', '!Gruntfile.js']
    },
    tslint: {
      files: {
        src: ['**/*.ts']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.ts', '!Gruntfile.js'],
        tasks: ['eslint', 'tslint']
      }
    }
  });

  // loading modules
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // additional tasks
  grunt.registerTask('default', ['eslint', 'tslint', 'watch']);
  grunt.registerTask('test', ['eslint', 'tslint']);
};
