# chronos-config

 This is the configuration loading device for `chronos-core`.

## How to install this module
```
npm install --save chronos-config
```


## Usage
To get started, create a `config` directory at the root of your project and create
a `default.js` with the following format:

```Javascript
'use strict';

const configuration = {
    chronos: {
        routes: [
            {
                path       : '/example',
                httpAction : 'GET',
                tags       : ['api'],
                description: 'Example endpoint',
                actions    : [
                    {
                        name: 'action 1',
                        type: 'http'
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

module.exports = configuration;
```

***

NOTE: If set, chronos-config will use your `NODE_ENV` to determine which configuration to load.
```
$: echo $NODE_ENV
production
```
Will load configuration at `config/production.js`

***

```Javascript
'use strict';

const Promise = require('bluebird');
const Config = require('chronos-config');
const config = new Config();

const logConfig = () => {

    config.get()
        .then((configuration) => {
            console.log(configuration.routes[0].path) // /example
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = () => {

    return Promise.resolve()
        .bind()
        .then(logConfig)
        .catch(function(err) {
            console.log(err);
        })
};
```

## Configuration Schema

```Javascript
//executable action
action  = Joi.object().keys({
    name       : Joi.string(),

    //type is the custom action to be invoked
    type       : Joi.string(),

    description: Joi.string().optional()
}),

//parallel actions
actions = Joi.array().items(action).min(2),

//route configuration
routes  = Joi.object().keys({
    path       : Joi.string(),
    httpAction : Joi.string().valid('GET', 'POST'),
    tags       : Joi.array().items(Joi.string()).min(1),
    description: Joi.string(),
    actions    : Joi.array().items(action, actions).min(1)
}),

//Final overall schema
schema  = Joi.object().keys({
    routes: Joi.array().items(routes).min(1)
});
```

## Install Dependencies
Install the dependencies for this project and create shrinkwrap.
```Text
make clean
```

Install the dependencies based on package.json or shrinkwrap.
```Text
make install
```

## Test Project
Run mocha test locally.
```Text
make test
```