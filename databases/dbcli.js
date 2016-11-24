#!/usr/bin/env node
"use strict";
console.log("process.argv[2]: " + process.argv[2])
console.log("process.argv[3]: " + process.argv[3])

const
    request = require('request'),
    options = {
        method: process.argv[2] || 'GET',
        url: 'http://localhost:3500/' + (process.argv[3] || '')
    };
request(options, function(err, res, body) {
    console.log('in the function')
    if(err){
        throw Error(err);
    } else {
        console.log(res.statusCode, JSON.parse(body));
    }

});