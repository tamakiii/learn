.PHONY: test

KARMA := $(shell npm bin)/karma

test:
	npm test

start:
	@$(KARMA) start karma.conf.js --log-level debug --single-run
