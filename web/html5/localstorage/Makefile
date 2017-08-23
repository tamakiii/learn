.PHONY: test

NPM := $(shell which npm)
TESTEM := $(shell npm bin)/testem

install:
	$(NPM) install

test:
	$(TESTEM)

launchers:
	$(TESTEM) launchers

