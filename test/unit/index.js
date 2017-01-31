'use strict';

const config = require('../../lib/index');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('unit tests - index', function() {
    it('should load a config from config/default.js and assign properties for single route', () => {
        return config()
            .then((result) => {
\               expect(result).to.an.object();
                expect(result.chronos).to.be.an.object();
                expect(result.chronos.routes).to.be.an.array();
                expect(result.chronos.routes[0]).to.be.an.object();

                expect(result.chronos.routes[0].path).to.be.a.string();
                expect(result.chronos.routes[0].path).to.be.equal('/rfq');

                expect(result.chronos.routes[0].httpAction).to.be.a.string();
                expect(result.chronos.routes[0].httpAction).to.equal('GET');

                expect(result.chronos.routes[0].tags).to.be.an.array();
                expect(result.chronos.routes[0].tags.length).to.equal(1);
                expect(result.chronos.routes[0].tags[0]).to.be.a.string();

                expect(result.chronos.routes[0].description).to.be.a.string();
                expect(result.chronos.routes[0].description).to.equal('RFQ endpoint for all clients in XO');

                expect(result.chronos.routes[0].actions).to.be.an.array();
                expect(result.chronos.routes[0].actions.length).to.equal(2);

                expect(result.chronos.routes[0].actions[0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].name).to.equal('action 1');
                expect(result.chronos.routes[0].actions[0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].type).to.equal('storedProcedure');

                expect(result.chronos.routes[0].actions[1]).to.be.an.array();
                expect(result.chronos.routes[0].actions[1].length).to.equal(2);

                expect(result.chronos.routes[0].actions[1][0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].name).to.equal('action 2');
                expect(result.chronos.routes[0].actions[1][0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].type).to.equal('http');

                expect(result.chronos.routes[0].actions[1][1]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][1].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].name).to.equal('action 3');
                expect(result.chronos.routes[0].actions[1][1].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].type).to.equal('http');
            });
    });

    it('should load a config from filepath and assign properties for single route', () => {
        const context = {
            configPath: '../../test/fixtures/config/sample-config.js'
        };

        return config(context)
            .then((result) => {
                expect(result).to.an.object();
                expect(result.chronos).to.be.an.object();
                expect(result.chronos.routes).to.be.an.array();
                expect(result.chronos.routes[0]).to.be.an.object();

                expect(result.chronos.routes[0].path).to.be.a.string();
                expect(result.chronos.routes[0].path).to.be.equal('/quote');

                expect(result.chronos.routes[0].httpAction).to.be.a.string();
                expect(result.chronos.routes[0].httpAction).to.equal('GET');

                expect(result.chronos.routes[0].tags).to.be.an.array();
                expect(result.chronos.routes[0].tags.length).to.equal(1);
                expect(result.chronos.routes[0].tags[0]).to.be.a.string();

                expect(result.chronos.routes[0].description).to.be.a.string();
                expect(result.chronos.routes[0].description).to.equal('Quote endpoint for all clients in XO');

                expect(result.chronos.routes[0].actions).to.be.an.array();
                expect(result.chronos.routes[0].actions.length).to.equal(2);

                expect(result.chronos.routes[0].actions[0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].name).to.equal('identities');
                expect(result.chronos.routes[0].actions[0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].type).to.equal('chronos.procedure.identities');

                expect(result.chronos.routes[0].actions[1]).to.be.an.array();
                expect(result.chronos.routes[0].actions[1].length).to.equal(2);

                expect(result.chronos.routes[0].actions[1][0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].name).to.equal('action 1');
                expect(result.chronos.routes[0].actions[1][0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].type).to.equal('http');

                expect(result.chronos.routes[0].actions[1][1]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][1].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].name).to.equal('action 2');
                expect(result.chronos.routes[0].actions[1][1].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].type).to.equal('http');
            });
    });

    it('should load a config from a file and assign properties for multiple routes', () => {
        const context = {
            configPath: '../../test/fixtures/config/sample-config-big.json'
        };

        return config(context)
            .then((result) => {
                expect(result).to.an.object();
                expect(result.chronos).to.be.an.object();
                expect(result.chronos.routes).to.be.an.array();
                expect(result.chronos.routes[0]).to.be.an.object();

                expect(result.chronos.routes[0].path).to.be.a.string();
                expect(result.chronos.routes[0].path).to.be.equal('/inquiry');

                expect(result.chronos.routes[0].httpAction).to.be.a.string();
                expect(result.chronos.routes[0].httpAction).to.equal('GET');

                expect(result.chronos.routes[0].tags).to.be.an.array();
                expect(result.chronos.routes[0].tags.length).to.equal(1);
                expect(result.chronos.routes[0].tags[0]).to.be.a.string();

                expect(result.chronos.routes[0].description).to.be.a.string();
                expect(result.chronos.routes[0].description).to.equal('Inquiry endpoint for all clients in XO');

                expect(result.chronos.routes[0].actions).to.be.an.array();
                expect(result.chronos.routes[0].actions.length).to.equal(2);

                expect(result.chronos.routes[0].actions[0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].name).to.equal('identities');
                expect(result.chronos.routes[0].actions[0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[0].type).to.equal('chronos.procedure.identities');

                expect(result.chronos.routes[0].actions[1]).to.be.an.array();
                expect(result.chronos.routes[0].actions[1].length).to.equal(2);

                expect(result.chronos.routes[0].actions[1][0]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][0].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].name).to.equal('action 1');
                expect(result.chronos.routes[0].actions[1][0].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][0].type).to.equal('http');

                expect(result.chronos.routes[0].actions[1][1]).to.be.an.object();
                expect(result.chronos.routes[0].actions[1][1].name).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].name).to.equal('action 2');
                expect(result.chronos.routes[0].actions[1][1].type).to.be.a.string();
                expect(result.chronos.routes[0].actions[1][1].type).to.equal('http');


                expect(result.chronos.routes[1].path).to.be.a.string();
                expect(result.chronos.routes[1].path).to.be.equal('/quote');

                expect(result.chronos.routes[1].httpAction).to.be.a.string();
                expect(result.chronos.routes[1].httpAction).to.equal('GET');

                expect(result.chronos.routes[1].tags).to.be.an.array();
                expect(result.chronos.routes[1].tags.length).to.equal(1);
                expect(result.chronos.routes[1].tags[0]).to.be.a.string();

                expect(result.chronos.routes[1].description).to.be.a.string();
                expect(result.chronos.routes[1].description).to.equal('Quote endpoint for all clients in XO');

                expect(result.chronos.routes[1].actions).to.be.an.array();
                expect(result.chronos.routes[1].actions.length).to.equal(2);

                expect(result.chronos.routes[1].actions[0]).to.be.an.object();
                expect(result.chronos.routes[1].actions[0].name).to.be.a.string();
                expect(result.chronos.routes[1].actions[0].name).to.equal('identities');
                expect(result.chronos.routes[1].actions[0].type).to.be.a.string();
                expect(result.chronos.routes[1].actions[0].type).to.equal('chronos.procedure.identities');

                expect(result.chronos.routes[1].actions[1]).to.be.an.array();
                expect(result.chronos.routes[1].actions[1].length).to.equal(2);

                expect(result.chronos.routes[1].actions[1][0]).to.be.an.object();
                expect(result.chronos.routes[1].actions[1][0].name).to.be.a.string();
                expect(result.chronos.routes[1].actions[1][0].name).to.equal('action 3');
                expect(result.chronos.routes[1].actions[1][0].type).to.be.a.string();
                expect(result.chronos.routes[1].actions[1][0].type).to.equal('http');

                expect(result.chronos.routes[1].actions[1][1]).to.be.an.object();
                expect(result.chronos.routes[1].actions[1][1].name).to.be.a.string();
                expect(result.chronos.routes[1].actions[1][1].name).to.equal('action 4');
                expect(result.chronos.routes[1].actions[1][1].type).to.be.a.string();
                expect(result.chronos.routes[1].actions[1][1].type).to.equal('http');

                expect(result.chronos.routes[2].path).to.be.a.string();
                expect(result.chronos.routes[2].path).to.be.equal('/identity');

                expect(result.chronos.routes[2].httpAction).to.be.a.string();
                expect(result.chronos.routes[2].httpAction).to.equal('GET');

                expect(result.chronos.routes[2].tags).to.be.an.array();
                expect(result.chronos.routes[2].tags.length).to.equal(1);
                expect(result.chronos.routes[2].tags[0]).to.be.a.string();

                expect(result.chronos.routes[2].description).to.be.a.string();
                expect(result.chronos.routes[2].description).to.equal('Identity endpoint for all clients in XO');

                expect(result.chronos.routes[2].actions).to.be.an.array();
                expect(result.chronos.routes[2].actions.length).to.equal(2);

                expect(result.chronos.routes[2].actions[0]).to.be.an.object();
                expect(result.chronos.routes[2].actions[0].name).to.be.a.string();
                expect(result.chronos.routes[2].actions[0].name).to.equal('identities');
                expect(result.chronos.routes[2].actions[0].type).to.be.a.string();
                expect(result.chronos.routes[2].actions[0].type).to.equal('chronos.procedure.identities');

                expect(result.chronos.routes[2].actions[1]).to.be.an.array();
                expect(result.chronos.routes[2].actions[1].length).to.equal(2);

                expect(result.chronos.routes[2].actions[1][0]).to.be.an.object();
                expect(result.chronos.routes[2].actions[1][0].name).to.be.a.string();
                expect(result.chronos.routes[2].actions[1][0].name).to.equal('action 5');
                expect(result.chronos.routes[2].actions[1][0].type).to.be.a.string();
                expect(result.chronos.routes[2].actions[1][0].type).to.equal('http');

                expect(result.chronos.routes[2].actions[1][1]).to.be.an.object();
                expect(result.chronos.routes[2].actions[1][1].name).to.be.a.string();
                expect(result.chronos.routes[2].actions[1][1].name).to.equal('action 6');
                expect(result.chronos.routes[2].actions[1][1].type).to.be.a.string();
                expect(result.chronos.routes[2].actions[1][1].type).to.equal('http');
            });
    });

    it('should error if config is invalid', () => {
        const context = {
            configPath: '../../test/fixtures/config/bad-config.json'
        };

        return config(context)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                expect(err).to.be.an.error();
            });
    });
});