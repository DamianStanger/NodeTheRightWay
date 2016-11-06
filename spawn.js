#!/usr/bin/env node
"use strict"

let fs = require ('fs'),
    spawn = require('child_process').spawn,
    cmd = process.argv[2],
    args = process.argv.slice(3,process.argv.length);

// process.stdout.write(cmd);
// console.dir(args);

var s = spawn(cmd, args);
s.stdout.on('data', function(chunk){
    process.stdout.write(chunk);
    process.exit();
})