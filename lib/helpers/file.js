'use strict';

const Promise = require('bluebird');
const Config = require('ez-config');

const returnContents = () => {

    return new Promise((resolve, reject) => {

        let config;

        try {
            config = Config.get('chronos');

            if (!config) {
                throw new Error('Unable to load configuration');
            }
        }
        catch (e) {
            reject(e);
        }

        return resolve(config);
    });
};

module.exports = { returnContents };
