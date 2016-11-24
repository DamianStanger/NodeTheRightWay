'use strict';
const
    fs = require('fs'),
    cheerio = require('cheerio');

function getStructure($, collect) {
    var id = $('pgterms\\:ebook').attr('rdf:about').replace('ebooks/', '');
    var title = $('dcterms\\:title').text();
    var authors = $('pgterms\\:agent pgterms\\:name').map(collect);
    var subjects = $('[rdf\\:resource$="/LCSH"] ~ rdf\\:value').map(collect);

    /*console.log("1   " + $($('pgterms\\:agent pgterms\\:name')[0]).text());
    console.log("2a   " + authors[0]);
    console.log("2b   " + authors[1]);
    console.log("2c   " + authors[2]);

    var mapped = authors.map( function(x) {
        console.log("3   " + x);
        return x.toString()
    });
    console.log("3a    " + mapped);
*/
    var myAuthors = [];
    for(var x=0; x<authors.length; x++){
        // console.log("4   " + authors[x]);
        myAuthors[x] = authors[x];
    }
    var mySubjects = [];
    for(var x=0; x<subjects.length; x++){
        // console.log("4   " + subjects[x]);
        mySubjects[x] = subjects[x];
    }



    return {
        _id: id,
        title: title,
        authors: myAuthors,
        subjects: mySubjects
    }
}
module.exports = function(filename, callback){
    fs.readFile(filename, function(err, data){
        if(err){return callback(err); }
        let
            $ = cheerio.load(data.toString()),
            collect = function(index, elem){
                //console.log("collect=" + $(elem).text())
                return $(elem).text();
            }

        callback(null, getStructure($, collect));
    });
};

