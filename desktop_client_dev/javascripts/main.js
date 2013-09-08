/**
 * 
 * client require.js bootstrap
 */
require.config({
    
    baseUrl: 'javascripts/',

    paths: {
        'utilities': 'library/utilities',
        'jQuery': 'vendor/jquery/jquery-2.0.3.min',
        'backbone': 'vendor/backbone/backbone-1.0.0.min',
        'underscore': 'vendor/underscore/underscore-1.5.1.min'
    },
    shim: {
        'underscore': { exports: '_' },
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' }
    }

});

require(['utilities'], function(utilities) {

    // enforce ecma script 5 strict mode
    'use strict';

    /**
     * initialize the application
     */
    $(function() {
        
        utilities.changeColor('green');
        utilities.log('main.js is ready ...');
        
    });
    
});