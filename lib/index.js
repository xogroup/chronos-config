'use strict';

const Promise = require('bluebird');
const { returnContents } = require('./helpers/file');

const getConfiguration = () => {

    return returnContents();
};

const error = (err) => {

    return Promise.reject(err);
};

module.exports = () => {

    return Promise.resolve()
        .bind()
        .then(getConfiguration)
        .catch(error);
};
