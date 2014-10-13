var fs = require('fs');

module.exports = function(app) {
    exports.file = function(req, res) {
        req.pipe(req.busboy);
        req.busboy.on('file', function(fieldname, file, filename) {
            var fstream = fs.createWriteStream('../../tmp/' + filename);
            file.pipe(fstream);
            fstream.on('close', function() {
                console.log("fstream closed");
            });
        });
    };
}