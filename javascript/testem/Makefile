.PHONY: test launchers

TESTEM := $(shell npm bin)/testem
MOCHA := $(shell npm bin)/mocha
BABEL := $(shell npm bin)/babel

test:
	$(TESTEM)

launchers:
	$(TESTEM) launchers

mocha:
	$(MOCHA) lib --recursive --compilers js:babel-register

babel:
	$(BABEL) lib --out-dir tmp
