var fs = require('fs');
module.exports = function(directory, filter, cb){
    
    fs.readdir(directory, function(err, list){
        if(err){
            return cb(err);
        }
        var result = [];
        for (var i = 0; i<list.length;i++) {
            if(endsWith(list[i], "." + filter)){
                result.push(list[i]);
            }
        }
        return cb(null, result);
    });
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}