.PHONY: install update clean

DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
MAKE := $(shell which make)
NPM_BIN := $(shell npm bin)

install: update

update:
	@type brew > /dev/null
	@brew update
	@brew bundle --file=$(DIR)/Brewfile
	@npm install

clean:
	@rm -rf node_modules

check:
	@type brew > /dev/null
	@brew bundle check --file=$(DIR)/Brewfile
	@brew bundle cleanup --file=$(DIR)/Brewfile

run-sample:
	$(MAKE) -C example sample
