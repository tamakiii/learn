.PHONY: test

MOCHA := $(shell npm bin)/mocha

test:
	@$(MOCHA) --require intelli-espower-loader test/*

simple-test:
	find test -name '*.js' | xargs -I@ node @
