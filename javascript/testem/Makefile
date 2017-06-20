.PHONY: test launchers

TESTEM := $(shell npm bin)/testem
MOCHA := $(shell npm bin)/mocha
BABEL := $(shell npm bin)/babel

test:
	$(TESTEM)

launchers:
	$(TESTEM) launchers

mocha:
	$(MOCHA) src --recursive --compilers js:babel-register

babel:
	$(BABEL) src --out-dir tmp
