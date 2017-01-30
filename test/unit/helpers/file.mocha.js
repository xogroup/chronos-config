'use strict';

const { returnContents } = require('../../../lib/helpers/file');
const { should }  = require('chai').should(); // eslint-disable-line no-unused-vars

describe('unit tests - file helper', function() {
    it('should return file contents as object', () => {
        const filePath = 'test/mocks/config/sample-config.json';

        return returnContents(filePath)
            .then((contents) => {
                contents.should.be.an('object');
            });
    });

    it('should error if no config file found', () => {
        const filePath = 'test/mocks/config/i-dont-exist.json';

        return returnContents(filePath)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                err.should.be.an('error');
                err.message.should.equal('ENOENT: no such file or directory, open \'test/mocks/config/i-dont-exist.json\'');
            });
    });
});