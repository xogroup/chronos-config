'use strict';

const Promise = require('bluebird');
const file = require('./helpers/file');
const validator = require('./helpers/validate');

const getConfiguration = function() {
    const self = this;

    const configuration = file.returnContents(self.configPath);

    return configuration;
};

const validateConfiguration = function(configuration) {
    const result = validator.validate(configuration);

    return result;
};

const error = function(err) {
    return Promise.reject(err);
};

module.exports = (context) => {
    // build executing context
    const executingContext = {
        configPath: context.configPath
    };

    return Promise.resolve()
        .bind(executingContext)
        .then(getConfiguration)
        .then(validateConfiguration)
        .catch(error);
};