'use strict';

const { returnContents } = require('../../../lib/helpers/file');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const before = lab.before;

describe('unit tests - file helper', () => {

    describe('while NODE_ENV not set', () => {

        before((done) => {

            delete process.env.NODE_ENV;
            process.env.NODE_CONFIG_DIR = './test/fixtures/config/';

            done();
        });

        it('should return config/default.json file contents as object', () => {

            return returnContents()
                .then((contents) => {

                    expect(contents).to.be.an.object();
                    expect(contents.routes).to.an.array();
                    expect(contents.routes[0]).to.be.an.object();
                    expect(contents.routes[0].path).to.equal('/quote');
                });
        });
    });
});
