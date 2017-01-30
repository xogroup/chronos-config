# chronos-config

 This is the configuration loading device for `chronos-core`.

## How to install this module
COMING SOON!


## Usage
Configuration must adhere to the following schema  

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