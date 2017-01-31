'use strict';

const { returnContents } = require('../../../lib/helpers/file');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('unit tests - file helper', function() {
    it('should return .js file contents as object', () => {
        const filepath = '../../test/fixtures/config/sample-config.js';

        return returnContents(filepath)
            .then((contents) => {
                expect(contents).to.be.an.object();
            });
    });

    it('should return .json file contents as object', () => {
        const filepath = '../../test/fixtures/config/sample-config.json';

        return returnContents(filepath)
            .then((contents) => {
                expect(contents).to.be.an.object();
            });
    });

    it('should error if config file extension not .js or .json', () => {
        const filepath = '../../test/fixtures/config/invalid-config.html';

        return returnContents(filepath)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                expect(err).to.be.an.error();
            });
    });

    it('should error if filepath file does not exist', () => {
        const filepath = '../../test/fixtures/config/i-dont-exist.json';

        return returnContents(filepath)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                expect(err).to.be.an.error();
            });
    });
});