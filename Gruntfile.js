module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint : {
            options: {
                jshintrc : true
            },
            all : ['Gruntfile.js', 'server.js', 'app/js/**/*.js']
        },
        clean : ['app/dist'],
        copy: {
            main : {
                files : [
                    {
                        expand  : true,
                        cwd     : 'app/',
                        src     : ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
                        dest    : 'app/dist/',
                        flatten : false,
                        filter  : 'isFile'
                    },
                    {
                        expand  : true,
                        cwd     : "app/js/app/",
                        src     : ["views/*.html"],
                        dest    : "app/dist",
                        flatten : false,
                        filter  : "isFile"
                    }
                ]
            }
        },
        browserify : {
            all : {
                src  : ['app/js/**/*.js', 'app/bower_components/ng-file-upload-shim/angular-file-upload-shim.js', 'app/bower_components/angular/angular.js', 'app/bower_components/ng-file-upload/angular-file-upload.js', 'app/bower_components/angular-base64/angular-base64.js', 'app/bower_components/angular-cookie/angular-cookie.js', 'app/bower_components/angular-loader/angular-loader.js', 'app/bower_components/angular-resource/angular-resource.js', 'app/bower_components/angular-route/angular-route.js'],
                dest : 'app/dist/client.js'
            },
            options : {
                transform : ['debowerify'],
                debug     : true
            },
        },
        simplemocha : {
            all : {
                src : ['test/mocha/**/*.js']
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
                tasks : ['build'],
                options: {
                    livereload: true
                }
            },
            express : {
                files   : ['server.js', 'routes/*.js', 'models/*.js'],
                tasks   : ['server'],
                options : {
                    spawn : false
                }
            },
            mochatest : {
                files : ['test/mocha/**/*.js'],
                tasks : ['test'],
                options : {
                    spawn : false
                }
            }
        },
        mongoimport : {
            options : {
                db : 'ancient',
                host : 'localhost',
                collections : [
                    {
                        name : 'cards',
                        type : 'csv',
                        file : 'cardsDB.csv',
                        fields : ['cardName', 'cardRare', 'cardColor', 'cardSet', 'cardQty', 'cardPrice'],
                        drop : true,
                    },
                ],
            },
        }
    });// end grunt.initConfig

    grunt.registerTask('serve', [ 'build', 'express:dev', 'watch' ]);
    grunt.registerTask('server', 'serve');
    grunt.registerTask('default', 'serve');
    grunt.registerTask('hint', 'jshint');
    grunt.registerTask('build', ['clean', 'browserify', 'copy:main', 'sass']);
    grunt.registerTask('import', 'mongoimport');
    grunt.registerTask('test', ['simplemocha']);






























}// end module.exports