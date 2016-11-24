'use strict';
const
    rdfParser = require('../rdf-parser'),
    expectedValue = require('./pg132.json');
exports.testRDFParser = function(test) {
    rdfParser(__dirname + '/pg132.rdf', function(err, book){
        test.expect(2);
        test.ifError(err);
        test.deepEqual(book, expectedValue, "book should deep equal");
        test.done();
    });
};