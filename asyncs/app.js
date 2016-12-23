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
var files1 = [dir1+"/bpshop",dir1+"/manwha", dir1+"/no-dir"];

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

var testAsyncFnc = function(item, callback) {
    console.log('asyncFnc:', item);
    setTimeout(function() { return callback(null); }, 1000);
}

async.each(files1,
        function(file1, callback) {
            //fs.access(file1, function(err) { 
            testAsyncFnc(file1, function(err) { 
                console.log('eachFile run:', file1);
                callback(null, !err); 
            });
        },
        function(err) {
            console.log('each.last.doSomethingOnceAllAreDone():', err);
        }
    );

async.every(files1,
        function(file1, callback) {
            //fs.access(file1, function(err) { 
            testAsyncFnc(file1, function(err) { 
                console.log('everyFile run:', file1);
                callback(null, !err); 
            });
        },
        function(err, result) {
            console.log('every.last.doSomethingOnceAllAreDone():', err, result);
        }
    );

async.filter(files1,
        function(file1, callback) {
            fs.access(file1, function(err) { 
            //testAsyncFnc(file1, function(err) { 
                console.log('everyFilter run:', file1);
                callback(null, !err); 
            });
        },
        function(err, result) {
            console.log('filter.last.doSomethingOnceAllAreDone():', err, result);
        }
    );


async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log ('parallel', err, results);
});



var stm = new Date().getTime();
console.log('parallel2 start', stm);
// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 2000);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 1000);
    }
}, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    var edm = new Date().getTime();
    console.log('parallel2 end', edm);
    console.log ('parallel2:', err, results, edm-stm);
});


var stm2 = new Date().getTime();
console.log('series start', stm2);
async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 2000);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 1000);
    }
}, function(err, results) {
    var edm2 = new Date().getTime();
    console.log('series end', edm2);
    console.log ('series:', err, results, edm2-stm2);
});
