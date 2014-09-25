

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint : {
            options: {
                jshintrc : true
            },
            all : ['Gruntfile.js', 'server.js', 'app/js/**/*.js']
        },
        clean : ['dist'],
        copy: {
            all : {
                expand  : true,
                cwd     : 'app/',
                src     : ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
                dest    : 'app/dist/',
                flatten : false,
                filter  : 'isFile'
            },
        },
        browserify : {
            all : {
                src  : 'app/js/**/*/js',
                dest : 'app/dist/client.js'
            },
            options : {
                transform : ['debowerify'],
                debug     : true
            }
        },
        sass : {
            dist : {
                files : {
                    'app/dist/style.css' : 'sass/style.scss'
                },
                options : {
                    includePaths : require('node-bourbon').includePaths,
                    includePaths : require('node-neat').includePaths
                }
            }
        },
        express : {
            dev : {
                options : {
                    background : true,
                    script     : 'server.js'
                }
            },
            prod : {
                options : {
                    script   : 'server.js',
                    node_env : 'production'
                }
            },
            test : {
                options : {
                    script : 'server.js',
                }
            }
        },
        watch : {
            scripts : {
                files : ['app/js/**/*.js', 'app/bower_components/**/*.js', 'test/**/*.js', 'app/**/*.html', 'api/**/*.js', '!app/dist/**/*.html'],
                tasks : ['build']
            },
            express : {
                files   : ['server.js', 'routes/*.js', 'models/*.js'],
                tasks   : ['server'],
                options : {
                    spawn : false
                }
            }
        }
    });// end grunt.initConfig

    grunt.registerTask('serve', [ 'build', 'express:dev', 'watch' ]);
    grunt.registerTask('server', 'serve');
    grunt.registerTask('default', 'serve');
    grunt.registerTask('hint', 'jshint');
    grunt.registerTask('build', ['clean', 'browserify', 'copy', 'sass']);































}// end module.exports