'use strict';

const Promise = require('bluebird');
const { returnContents } = require('./helpers/file');
const { validate } = require('./helpers/validate');

const getConfiguration = function() {
    const self = this;

    return returnContents(self.configPath);
};

const validateConfiguration = function(configuration) {
    return validate(configuration);
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