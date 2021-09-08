module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        'compress': false,
        'include css': true
      },
      compile: {
        files: {
          '_uploads/master.css': '_resources/_styles/master.styl',
        }
      }
    },
    concat: {
      dist: {
        src: [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/js-cookie/src/js.cookie.js',
          'node_modules/slick-carousel/slick/slick.js',
          'node_modules/smoothstate/jquery.smoothState.min.js',
          'node_modules/jquery-validation/dist/jquery.validate.min.js',
          '_resources/_scripts/main.js'
        ],
        dest: '_uploads/master.js',
      }
    },
    exec: {
      serve: {
        cmd: 'bundle exec jekyll serve'
      }
    },
    watch: {
      scripts: {
        files: ['_resources/_scripts/*.js', 'Gruntfile.js', '_resources/_styles/*.styl'],
        tasks: ['concat', 'stylus'],
        options: {
          spawn: false
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['concat', 'stylus', 'watch']);
};
