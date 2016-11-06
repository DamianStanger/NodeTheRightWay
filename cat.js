#!/usr/bin/env node
"use strict";

var fs = require('fs');
var readStream = fs.createReadStream(process.argv[2]);
readStream.on('data', function(chunk){
    process.stdout.write(chunk);
});
readStream.on('error', function(err){
   process.stderr.write("ERROR: " + err.message + "/n");
});
