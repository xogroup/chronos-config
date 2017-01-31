'use strict';

const configuration = {
    chronos: {
        routes: [
            {
                path       : '/quote',
                httpAction : 'GET',
                tags       : ['api'],
                description: 'Quote endpoint for all clients in XO',
                actions    : [
                    {
                        name: 'identities',
                        type: 'chronos.procedure.identities'
                    },
                    [
                        {
                            name: 'action 1',
                            type: 'http'
                        },
                        {
                            name: 'action 2',
                            type: 'http'
                        }
                    ]
                ]
            }
        ]
    }
};

module.exports = configuration;