'use strict';

const Joi = require('joi');

const action = Joi.object().keys({
    name       : Joi.string(),
    type       : Joi.string(),
    description: Joi.string().optional()
});

const actions = Joi.array().items(action).min(2);

const routes = Joi.object().keys({
    path       : Joi.string(),
    httpAction : Joi.string().valid('GET', 'POST'),
    tags       : Joi.array().items(Joi.string()).min(1),
    description: Joi.string(),
    actions    : Joi.array().items(action, actions).min(1)
});

const schema = Joi.object().keys({
    chronos: Joi.object().keys({
        routes: Joi.array().items(routes).min(1)
    })
});

const validate = function(input) {
    return new Promise(function(resolve, reject) {
        Joi.validate(input, schema, {
            presence: 'required'
        }, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {validate};