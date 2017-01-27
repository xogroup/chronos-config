'use strict';

var Promise = require('bluebird');
var file    = require('./helpers/file');

var getConfigFileContents = function() {
    var self = this;

    return file.returnContents(self.configPath);
};

var validateConfigFileContents = function(fileContents) {
    var self = this;

    // TODO: Determine what type of file was read
    var fileContents = JSON.parse(fileContents);

    // TODO: add real validation for the contents of the config file here
    // if passes validation, set file contents to context
    // else throw an error for validation failed
    if (fileContents.name !== undefined && fileContents.message !== undefined) {
        self.config.name = fileContents.name;
        self.config.message = fileContents.message;
    } else {
        throw new Error('File contents did not contain expected fields')
    }
};

var returnValidConfig = function() {
    var self = this;

    return self.config;
}

var error = function(err) {
    return Promise.reject(err);
};

module.exports = function (context) {
    // build executing context
    var executingContext = {
        configPath: context.configPath,
        config: {
            name: '',
            message: ''
        }
    }

    return Promise.resolve()
        .bind(executingContext)
        .then(getConfigFileContents)
        .then(validateConfigFileContents)
        .then(returnValidConfig)
        .catch(error);
};