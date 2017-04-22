// Karma configuration
// Generated on Fri Apr 21 2017 23:21:18 GMT+0700 (SE Asia Standard Time)
var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      './src/UnitTesting/*test.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.css',
      '**/*.svg',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../src/**/*.test.js' : ['webpack']
    },

    //CUSTOM PREPROCESSORS
    customPreprocessors:{
      babelSourceMap:{
        base: 'babel',
        options:{
          presets: ['react', 'babel-preset-es2015'],
          sourceMap: 'inline'
        },
        filename: function(file){
          return file.originalPath.replace(/\.js$/, '.es5.js');
        },
        sourceFileName: function(file){
          return file.originalPath;
        }
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    //webpack config
    webpack:{
      module:{
        loaders:[
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
         include:[
           path.join(__dirname, 'src'),
           path.join(__dirname, 'UnitTesting')
         ],
         query:{
           presets:['react', 'es2015']
         }}
        ]
      },
      watch: true,
      resolve:{
        extensions:['.js', '.jsx']
      }
    },
    webpackServer:{
      noInfo: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
