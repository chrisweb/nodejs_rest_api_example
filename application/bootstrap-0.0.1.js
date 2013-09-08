var utilitiesModule = require('./library/utilities');

// will print "im public"
utilitiesModule.imPublic();

// will fail
utilitiesModule.imPrivate();