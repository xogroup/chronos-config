NAME=xogroup/chronos-config
VERSION=latest

test:
	@istanbul cover node_modules/.bin/_mocha -- --recursive -w

clean:
	@rm -rf ./node_modules
	npm install
	npm prune

install:
	@rm -rf ./node_modules
	npm install

.PHONY: test clean install