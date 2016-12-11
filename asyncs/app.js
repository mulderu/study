/**
 *
 * study http://caolan.github.io/async/docs.html
 *
 */
var async = require('async');
var fs = require('fs');

async.concat(['/Users/mulder/project/mulder','/Users/mulder/project/obs'], fs.readdir, function(err, files) {
    if(err) { console.log (err); return; }
    console.log ('concat', files);
});

async.concatSeries(['/Users/mulder/project/mulder','/Users/mulder/project/obs'], fs.readdir, function(err, files) {
    if(err) { console.log (err); return; }
    console.log ('concatSeries', files);
});

var dir1   = "/Users/mulder/project/mulder";
var files1 = [dir1+"/bpshop",dir1+"/manwha"];

async.detect(files1, function(filePath, callback) {
        fs.access(filePath, function(err) { callback(null, !err); });
    }, function(err, result) {
        if(err) { console.log (err); return; }
        console.log ('detect', result);
});
async.detectLimit([dir1+"/bpshop",dir1+"/manwha"], 2, function(filePath, callback) {
        fs.access(filePath, function(err) { callback(null, !err); });
    }, function(err, result) {
        if(err) { console.log (err); return; }
        console.log ('detectLimit', result);
});

async.each(files1,
        function(file1, callback) {
            fs.access(file1, function(err) { 
                console.log('each file run:', file1);
                callback(null, !err); 
            });
        },
        function(err) {
            console.log('each.last.doSomethingOnceAllAreDone():', err);
        }
    );
