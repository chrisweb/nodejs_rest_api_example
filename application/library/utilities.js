'use strict';

(function() {

    var color;
    var utilities = {};

    utilities.version = '0.0.1';
    
    // utilities logger
    utilities.log = function() {

        // is console defined, some older IEs don't have a console
        if (typeof(console) !== 'undefined') {
            
            var colors = {};
            var colorReset = '\u001b[0m';

            // nodejs or browser mode, window is undefined in nodejs
            if (typeof(window) === 'undefined') {

                colors.red = '\u001b[31m';
                colors.green = '\u001b[32m';

            } else {

                colors.red = 'FF0000';
                colors.green = '00FF00';

            }
            
            var argumentsLength = arguments.length;
            
            for (var i = 0; i < argumentsLength; i++) {
                
                if (typeof(arguments[i]) === 'string' && typeof(color) !== 'undefined' && typeof(colors[color]) !== 'undefined') {
                    
                    if (typeof(window) === 'undefined') {
                        
                        console.log(colors[color] + arguments[i] + colorReset);
                        
                    } else {
                    
                        console.log('%c' + arguments[i], 'color: #' + colors[color]);
                        
                    }
                    
                } else {
                    
                    console.log(arguments[i]);
                    
                }
                
            }
            
        }
        
    };
    
    utilities.changeColor = function(changeColorTo) {
        
        if (changeColorTo === 'reset') {
            
            color = undefined;
            
        } else {
            
            color = changeColorTo;
            
        }
        
    };
            
    if (typeof(module) === 'object' && typeof(module.exports) === 'object') {
        module.exports = utilities;
    } else if (typeof(define) === 'function' && define.amd) {
        define('utilities', [], function() {
            return utilities;
        });
    }

})();