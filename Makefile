NAME=xogroup/chronos-config
VERSION=latest

test:
	node_modules/.bin/lab test --assert code --lint --verbose --coverage-path /test/unit

clean:
	@rm -f npm-shrinkwrap.json
	@rm -rf ./node_modules
	npm install
	npm prune
	shonkwrap

install:
	@rm -rf ./node_modules
	npm install

.PHONY: test clean install