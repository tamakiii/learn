.PHONY: test launchers

TESTEM := $(shell npm bin)/testem
MOCHA := $(shell npm bin)/mocha

test:
	$(TESTEM)

launchers:
	$(TESTEM) launchers

mocha:
	$(MOCHA) lib --recursive --compilers js:babel-register

