'use strict';

const { validate } = require('../../../lib/helpers/validate');
const { should }  = require('chai').should(); // eslint-disable-line no-unused-vars

describe('unit tests - validate helper', function() {
    it('should return configuration as an object', () => {
        const configuration = {
            chronos: {
                routes: [
                    {
                        path       : '/rfq',
                        httpAction : 'GET',
                        tags       : ['api'],
                        description: 'RFQ endpoint for all clients in XO',
                        actions    : [
                            {
                                name: 'action 1',
                                type: 'storedProcedure'
                            },
                            [
                                {
                                    name: 'action 2',
                                    type: 'http'
                                },
                                {
                                    name: 'action 3',
                                    type: 'http'
                                }
                            ]
                        ]
                    }
                ]
            }
        };

        return validate(configuration)
            .then((result) => {
                result.should.be.an('object');
            });
    });

    it('should error if configuration is invalid', () => {
        const configuration = {
            chronos: {
                routes: [
                    {
                        badpath       : ['/rfq'],
                        badhttpAction : 123,
                        badtags       : {},
                        baddescription: [],
                        actions       : [
                            {
                                name: 'bad action 1',
                                type: 'storedProcedure'
                            },
                            [
                                {
                                    name: 'bad action 2',
                                    type: 'http'
                                },
                                {
                                    name: 'bad action 3',
                                    type: 'http'
                                }
                            ]
                        ]
                    }
                ]
            }
        };

        return validate(configuration)
            .then(() => {
                throw new Error('method should have thrown.');
            })
            .catch((err) => {
                err.should.be.an('error');
            });
    });
});

