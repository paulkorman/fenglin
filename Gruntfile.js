module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            production: {
                options: {
                },
                files: {
                    'src/styles/main.css': 'src/styles/main.less',
                }
            }
        },
        svgicons2svgfont: {
            options: {
                fontName: "Fenglin-Font"
            },
            your_target: {
                src: 'src/fonts/fenglin_fonts_src/*.svg',
                dest: 'src/fonts/'
            }
        },
        watch: {
            css: {
                files: 'src/styles/*.less',
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgicons2svgfont');

    // Default task(s).
    grunt.registerTask('default', ['less', 'svgicons2svgfont']);

};