var fs = require('fs');
var $ = jQuery = require('jquery');
require('./jquery.csv-0.71.min.js');

var objectives = [];
var bonuses = [];

fs.readFile("objectives.csv", 'UTF-8', function(err, csv) {
    jQuery.csv.toObjects(csv, {}, function(err, data) {
        for(var i=0, len=data.length; i<len; i++) {
            var c = data[i].count;
            for(var j = 0; j < c; j++) {
                delete data[i].count;
                if(data[i]["2p"] == "Yes") {
                    data[i]["2p"] = true;
                } else {
                    data[i]["2p"] = false;
                }
                objectives.push(data[i]);
            }
        }

        var f = fs.openSync("objectives.json", "w");
        fs.writeSync(f, JSON.stringify(objectives, null, 4));
        fs.close(f);
    });
});

fs.readFile("bonuses.csv", 'UTF-8', function(err, csv) {
    jQuery.csv.toObjects(csv, {}, function(err, data) {
        for(var i=0, len=data.length; i<len; i++) {
            data[i].skulls = parseInt(data[i].skulls);
            bonuses.push(data[i]);
        }

        var f = fs.openSync("bonuses.json", "w");
        fs.writeSync(f, JSON.stringify(bonuses, null, 4));
        fs.close(f);
    });
});
