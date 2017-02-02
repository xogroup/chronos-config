'use strict';

const Config = require('../../lib/index');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const before = lab.before;

describe('unit tests - index', () => {

    describe('while NODE_ENV not set', () => {

        before(() => {

            return new Promise((resolve) => {

                if (process.env.NODE_ENV) {
                    delete process.env.NODE_ENV;
                }

                resolve();
            });
        });

        it('should return configuration object', () => {

            return Config()
                .then((result) => {

                    expect(result).to.an.object();
                    expect(result.routes).to.an.array();
                });
        });

        it('should return error, if encountered', () => {

            return Config()
                .then(() => {

                    throw new Error('method should have thrown.');
                })
                .catch((err) => {

                    expect(err).to.be.an.error();
                });
        });
    });
});
