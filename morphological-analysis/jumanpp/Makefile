.PHONY: install update clean

DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
MAKE := $(shell which make)
NPM_BIN := $(shell npm bin)

install: update

update:
	@type brew > /dev/null
	@brew update
	@brew bundle --file=$(DIR)/Brewfile

clean:
	@type brew > /dev/null
	@brew bundle cleanup --force --file=$(DIR)/Brewfile

check:
	@type brew > /dev/null
	@brew bundle check --file=$(DIR)/Brewfile
	@brew bundle cleanup --file=$(DIR)/Brewfile

run-sample:
	$(MAKE) -C example sample
