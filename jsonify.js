var fs = require('fs');
var $ = jQuery = require('jQuery');
require('./jquery.csv-0.71.min.js');

var sample = './objectives.csv';
fs.readFile(sample, 'UTF-8', function(err, csv) {
  jQuery.csv.toObjects(csv, {}, function(err, data) {
    for(var i=0, len=data.length; i<len; i++) {
      console.log(data[i]);
    }
  });
});
