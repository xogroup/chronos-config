'use strict';

const Promise = require('bluebird');
const fs      = require('fs');

const returnContents = (filePath) => {
    return new Promise((resolve, reject) => {
        const pathToConfig = filePath || '';
        const file = fs.readFileSync(pathToConfig, 'utf8');
        let contents;

        if (!file || file instanceof Error) {
            return reject(file);
        }

        // TODO: Check file is returning JSON
        try {
            contents = JSON.parse(file);
        } catch (e) {
            return reject(e);
        }

        return resolve(contents);
    });
};

module.exports = {returnContents};
