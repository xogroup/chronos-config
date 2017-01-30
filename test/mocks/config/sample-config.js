'use strict';

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

module.exports.default = configuration;