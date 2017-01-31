'use strict';

const { returnContents } = require('../../../lib/helpers/file');
const { should }  = require('chai').should(); // eslint-disable-line no-unused-vars

describe('unit tests - file helper', function() {
    it('should return .js configuration file extension', () => {
        const filepath = '../../test/fixtures/config/sample-config.js';

        return returnContents(filepath)
            .then((contents) => {
                contents.should.be.an('object');
            });
    });

    it('should return .json file contents as object', () => {
        const filepath = '../../test/fixtures/config/sample-config.json';

        return returnContents(filepath)
            .then((contents) => {
                contents.should.be.an('object');
            });
    });

    it('should error if no config file found', () => {
        const filepath = '../../test/fixtures/config/i-dont-exist.json';

        return returnContents(filepath)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                err.should.be.an('error');
            });
    });

    it('should error if config file extension not .js or .json', () => {
        const filepath = '../../test/fixtures/config/invalid-config.html';

        return returnContents(filepath)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                err.should.be.an('error');
            });
    });
});