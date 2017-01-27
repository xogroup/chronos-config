'use strict';

var Promise = require('bluebird');
var fs      = require('fs');

var returnContents = function(filePath) {
    return new Promise(function(resolve, reject) {
        var pathToConfig = filePath || '';
        var file = fs.readFileSync(pathToConfig, 'utf8');

        if (!file || file instanceof Error) {
            return reject(file);
        }

        return resolve(file);
    });
};

module.exports = {
    returnContents: returnContents
};
