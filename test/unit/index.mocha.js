'use strict';

var config = require('../../lib/index')
var chai   = require('chai');
var should = chai.should();

describe('unit tests - index', function() {
    it('should load a config and assign properties', function() {
        var context = {
            configPath: 'test/mocks/config/sample-config.json',
        };

        return config(context)
            .then(function(config){
                config.should.have.property('name');
                config.name.should.equal('Sample-Config');

                config.should.have.property('message');
                config.message.should.equal('This is a sample configuration');
            })
    });

    it('should error if no config file found', function () {
        var context = {
            configPath: 'test/mocks/config/i-dont-exist.json',
        };

        return config(context)
            .then(function(){
                throw new Error('method should have thrown.');
            })
            .catch(function(err) {
                err.message.should.equal('ENOENT: no such file or directory, open \'test/mocks/config/i-dont-exist.json\'')
            })
    });

    it('should error if config is invalid', function () {
        var context = {
            configPath: 'test/mocks/config/bad-config.json',
        };

        return config(context)
            .then(function(){
                throw new Error('method should have thrown.');
            })
            .catch(function(err) {
                err.message.should.equal('File contents did not contain expected fields')
            })
    });
});