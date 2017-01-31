'use strict';

const Promise = require('bluebird');
const path    = require('path');

const returnContents = (filepath) => {
    return new Promise((resolve, reject) => {
        let ext;
        let parsed;

        const filename = (process.env.NODE_ENV + '.js') || 'default.js';

        filepath = filepath || path.join(process.cwd(), 'config', filename);

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
