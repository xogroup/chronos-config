'use strict';

const Promise = require('bluebird');
const path    = require('path');

const returnContents = (filepath) => {
    return new Promise((resolve, reject) => {
        let ext;
        let parsed;

        filepath = filepath || path.join(process.cwd(), 'config', 'default.js');

        try {
            ext = path.extname(filepath).substr(1);

            if (ext === 'js' || ext === 'json') {
                parsed = require(filepath);
            }
        } catch (e) {
            return reject(e);
        }

        return resolve(parsed);
    });
};

module.exports = {returnContents};
