'use strict';

const Promise = require('bluebird');

const returnContents = () => {

    return new Promise((resolve) => {

        const Config = require('ez-config');
        const config = Config.get('chronos');

        return resolve(config);
    });
};

module.exports = { returnContents };
