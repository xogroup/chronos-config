'use strict';

const config = require('../../lib/index');
const { should }  = require('chai').should(); // eslint-disable-line no-unused-vars

describe('unit tests - index', function() {
    it('should load a config and assign properties for single route', () => {
        const context = {
            configPath: '../../test/fixtures/config/sample-config.js'
        };

        return config(context)
            .then((result) => {
                result.should.have.property('chronos');
                result.chronos.should.have.property('routes');
                result.chronos.routes[0].should.have.property('path');
                result.chronos.routes[0].path.should.equal('/rfq');

                result.chronos.routes[0].should.have.property('httpAction');
                result.chronos.routes[0].httpAction.should.equal('GET');

                result.chronos.routes[0].should.have.property('tags');
                result.chronos.routes[0].tags[0].should.equal('api');

                result.chronos.routes[0].should.have.property('description');
                result.chronos.routes[0].description.should.equal('RFQ endpoint for all clients in XO');

                result.chronos.routes[0].should.have.property('actions');
                result.chronos.routes[0].actions[0].should.have.property('name');
                result.chronos.routes[0].actions[0].name.should.equal('action 1');

                result.chronos.routes[0].actions[0].should.have.property('type');
                result.chronos.routes[0].actions[0].type.should.equal('storedProcedure');

                result.chronos.routes[0].actions[1][0].should.have.property('name');
                result.chronos.routes[0].actions[1][0].name.should.equal('action 2');

                result.chronos.routes[0].actions[1][0].should.have.property('type');
                result.chronos.routes[0].actions[1][0].type.should.equal('http');

                result.chronos.routes[0].actions[1][1].should.have.property('name');
                result.chronos.routes[0].actions[1][1].name.should.equal('action 3');
                result.chronos.routes[0].actions[1][1].should.have.property('type');
                result.chronos.routes[0].actions[1][1].type.should.equal('http');
            });
    });

    it('should load a config and assign properties for multiple routes', () => {
        const context = {
            configPath: '../../test/fixtures/config/sample-config-big.json'
        };

        return config(context)
            .then((result) => {
                result.should.have.property('chronos');
                result.chronos.should.have.property('routes');
                result.chronos.routes[0].should.have.property('path');
                result.chronos.routes[0].path.should.equal('/inquiry');

                result.chronos.routes[0].should.have.property('httpAction');
                result.chronos.routes[0].httpAction.should.equal('GET');

                result.chronos.routes[0].should.have.property('tags');
                result.chronos.routes[0].tags[0].should.equal('api');

                result.chronos.routes[0].should.have.property('description');
                result.chronos.routes[0].description.should.equal('Inquiry endpoint for all clients in XO');

                result.chronos.routes[0].should.have.property('actions');

                result.chronos.routes[0].actions[0].should.have.property('name');
                result.chronos.routes[0].actions[0].name.should.equal('identities');
                result.chronos.routes[0].actions[0].should.have.property('type');
                result.chronos.routes[0].actions[0].type.should.equal('chronos.procedure.identities');

                result.chronos.routes[0].actions[1][0].should.have.property('name');
                result.chronos.routes[0].actions[1][0].name.should.equal('action 4');
                result.chronos.routes[0].actions[1][0].should.have.property('type');
                result.chronos.routes[0].actions[1][0].type.should.equal('http');

                result.chronos.routes[0].actions[1][1].should.have.property('name');
                result.chronos.routes[0].actions[1][1].name.should.equal('action 5');
                result.chronos.routes[0].actions[1][1].should.have.property('type');
                result.chronos.routes[0].actions[1][1].type.should.equal('http');

                result.chronos.routes[1].should.have.property('path');
                result.chronos.routes[1].path.should.equal('/quote');

                result.chronos.routes[1].should.have.property('httpAction');
                result.chronos.routes[1].httpAction.should.equal('GET');

                result.chronos.routes[1].should.have.property('tags');
                result.chronos.routes[1].tags[0].should.equal('api');

                result.chronos.routes[1].should.have.property('description');
                result.chronos.routes[1].description.should.equal('Quote endpoint for all clients in XO');

                result.chronos.routes[1].should.have.property('actions');

                result.chronos.routes[1].actions[0].should.have.property('name');
                result.chronos.routes[1].actions[0].name.should.equal('identities');
                result.chronos.routes[1].actions[0].should.have.property('type');
                result.chronos.routes[1].actions[0].type.should.equal('chronos.procedure.identities');

                result.chronos.routes[1].actions[1][0].should.have.property('name');
                result.chronos.routes[1].actions[1][0].name.should.equal('action 6');
                result.chronos.routes[1].actions[1][0].should.have.property('type');
                result.chronos.routes[1].actions[1][0].type.should.equal('http');

                result.chronos.routes[1].actions[1][1].should.have.property('name');
                result.chronos.routes[1].actions[1][1].name.should.equal('action 7');
                result.chronos.routes[1].actions[1][1].should.have.property('type');
                result.chronos.routes[1].actions[1][1].type.should.equal('http');

                result.chronos.routes[2].should.have.property('path');
                result.chronos.routes[2].path.should.equal('/identity');

                result.chronos.routes[2].should.have.property('httpAction');
                result.chronos.routes[2].httpAction.should.equal('GET');

                result.chronos.routes[2].should.have.property('tags');
                result.chronos.routes[2].tags[0].should.equal('api');

                result.chronos.routes[2].should.have.property('description');
                result.chronos.routes[2].description.should.equal('Identity endpoint for all clients in XO');

                result.chronos.routes[2].should.have.property('actions');

                result.chronos.routes[2].actions[0].should.have.property('name');
                result.chronos.routes[2].actions[0].name.should.equal('identities');
                result.chronos.routes[2].actions[0].should.have.property('type');
                result.chronos.routes[2].actions[0].type.should.equal('chronos.procedure.identities');

                result.chronos.routes[2].actions[1][0].should.have.property('name');
                result.chronos.routes[2].actions[1][0].name.should.equal('action 8');
                result.chronos.routes[2].actions[1][0].should.have.property('type');
                result.chronos.routes[2].actions[1][0].type.should.equal('http');

                result.chronos.routes[2].actions[1][1].should.have.property('name');
                result.chronos.routes[2].actions[1][1].name.should.equal('action 9');
                result.chronos.routes[2].actions[1][1].should.have.property('type');
                result.chronos.routes[2].actions[1][1].type.should.equal('http');
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
                err.should.be.an('error');
            });
    });
});