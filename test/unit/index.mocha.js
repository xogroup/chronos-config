'use strict';

const config = require('../../lib/index');
const { should }  = require('chai').should(); // eslint-disable-line no-unused-vars

describe('unit tests - index', function() {
    it('should load a config and assign properties', () => {
        const context = {
            configPath: 'test/mocks/config/sample-config.json'
        };

        return config(context)
            .then((config) => {
                config.should.have.property('chronos');
                config.chronos.should.have.property('routes');
                config.chronos.routes[0].should.have.property('path');
                config.chronos.routes[0].path.should.equal('/rfq');

                config.chronos.routes[0].should.have.property('httpAction');
                config.chronos.routes[0].httpAction.should.equal('GET');

                config.chronos.routes[0].should.have.property('tags');
                config.chronos.routes[0].tags[0].should.equal('api');

                config.chronos.routes[0].should.have.property('description');
                config.chronos.routes[0].description.should.equal('RFQ endpoint for all clients in XO');

                config.chronos.routes[0].should.have.property('actions');
                config.chronos.routes[0].actions[0].should.have.property('name');
                config.chronos.routes[0].actions[0].name.should.equal('action 1');

                config.chronos.routes[0].actions[0].should.have.property('type');
                config.chronos.routes[0].actions[0].type.should.equal('storedProcedure');

                config.chronos.routes[0].actions[1][0].should.have.property('name');
                config.chronos.routes[0].actions[1][0].name.should.equal('action 2');

                config.chronos.routes[0].actions[1][0].should.have.property('type');
                config.chronos.routes[0].actions[1][0].type.should.equal('http');

                config.chronos.routes[0].actions[1][1].should.have.property('name');
                config.chronos.routes[0].actions[1][1].name.should.equal('action 3');
                config.chronos.routes[0].actions[1][1].should.have.property('type');
                config.chronos.routes[0].actions[1][1].type.should.equal('http');
            });
    });

    it('should error if no config file found', () => {
        const context = {
            configPath: 'test/mocks/config/i-dont-exist.json'
        };

        return config(context)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                err.should.be.an('error');
                err.message.should.equal('ENOENT: no such file or directory, open \'test/mocks/config/i-dont-exist.json\'');
            });
    });

    it('should error if config is invalid', () => {
        const context = {
            configPath: 'test/mocks/config/bad-config.json'
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