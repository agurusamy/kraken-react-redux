'use strict';

var express = require('express');
var kraken = require('kraken-js');
var nodeJSX = require('node-jsx');

// this would transpile the react router and es6 code into es5 before the server startup
require('css-modules-require-hook/preset');
require('babel-register')({
    presets: ['babel-preset-env', 'react']
});

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */

        next(null, config);
    }
};

// install node-jsx, so that we
// can require `.jsx` files in node.
nodeJSX.install({
    extension: '.jsx'
});

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
