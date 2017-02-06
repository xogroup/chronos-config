'use strict';

const Promise = require('bluebird');
const { returnContents } = require('./helpers/file');

class Config {

    constructor(options) {

        this.options = options;
    }

    get() {

        return Promise.resolve()
            .bind()
            .then(this._getConfiguration)
            .catch(this._error);
    }

    // private methods
    _getConfiguration() {

        return returnContents();
    };

    _error(err) {

        return Promise.reject(err);
    };
}

module.exports = Config;
